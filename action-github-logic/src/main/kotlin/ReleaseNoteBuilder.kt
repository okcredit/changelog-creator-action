import data.GithubClient
import kotlinx.datetime.Clock
import models.Inputs
import usecase.FetchLastClosedMilestone
import usecase.FetchMilestoneByName
import usecase.BuildChangelog
import usecase.GetPRsForMilestone
import utils.actions.info
import utils.actions.setOutput

class ReleaseNoteBuilder(private val inputs: Inputs) {

    private val githubClient: GithubClient by lazy { GithubClient(inputs.token, inputs.owner, inputs.repo) }

    private lateinit var fetchMilestoneByName: FetchMilestoneByName
    private lateinit var fetchLastClosedMilestone: FetchLastClosedMilestone

    private val pRsForMilestone: GetPRsForMilestone by lazy { GetPRsForMilestone(githubClient) }
    private val buildChangelog: BuildChangelog by lazy { BuildChangelog(inputs) }

    suspend fun build(): String {
        val milestoneInfo = fetchMilestone()

        print("ℹ️ Milestone found with name ${milestoneInfo.title}, closed on ${milestoneInfo.closedAt}")
        setOutput("milestone", milestoneInfo.title)
        val pullRequestList = utils.actions.group("ℹ️ Fetching PRs for milestone ${milestoneInfo.title}") {
            pRsForMilestone(
                milestone = milestoneInfo.number,
                closedPRs = milestoneInfo.closedPRs,
                milestoneClosedAt = milestoneInfo.closedAt ?: milestoneInfo.updated_at ?: Clock.System.now()
            )
        }

        println("ℹ️ Retrieved ${pullRequestList.size} merged PRs")
        return utils.actions.group("ℹ️ Building changelog") {
            buildChangelog(pullRequestList)
        }
    }

    private suspend fun fetchMilestone() = if (inputs.milestone.isNullOrBlank()) {
        utils.actions.group("ℹ️ No milestone supplied, resolving from closed list") {
            fetchLastClosedMilestone = FetchLastClosedMilestone(githubClient)
            fetchLastClosedMilestone()
        }
    } else {
        utils.actions.group("ℹ️ Resolving milestone with name ${inputs.milestone}") {
            fetchMilestoneByName = FetchMilestoneByName(githubClient)
            fetchMilestoneByName(inputs.milestone)
        }
    }
}