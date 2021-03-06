import data.GithubClient
import models.Inputs
import models.MilestoneInfo
import models.PullRequestInfo
import usecase.FetchLastClosedMilestone
import usecase.FetchMilestoneByName
import usecase.BuildChangelog
import usecase.GetPRsForMilestone
import utils.actions.setOutput

/**
 * Central builder which generates the changelog from the inputs provided.
 * 1. First fetches the milestone from title provided or resolving from closed milestones.
 * 2. Fetches all the PRs using [GetPRsForMilestone]
 * 3. Build changelog from list of PRs [BuildChangelog]
 */
class ChangelogBuilder(private val inputs: Inputs) {

    private val githubClient: GithubClient by lazy {
        GithubClient(
            inputs.token,
            inputs.owner,
            inputs.repo
        )
    }

    private lateinit var fetchMilestoneByName: FetchMilestoneByName
    private lateinit var fetchLastClosedMilestone: FetchLastClosedMilestone

    private val pRsForMilestone: GetPRsForMilestone by lazy { GetPRsForMilestone(githubClient) }
    private val buildChangelog: BuildChangelog by lazy { BuildChangelog(inputs) }

    suspend fun build(): String {
        val milestoneInfo = fetchMilestone()

        print("ℹ️ Milestone found with name ${milestoneInfo.title}, closed on ${milestoneInfo.closedAt}")
        setOutput("milestone", milestoneInfo.title)

        val pullRequestList = fetchPRsForMilestone(milestoneInfo)

        println("ℹ️ Retrieved ${pullRequestList.size} merged PRs")

        return utils.actions.group("ℹ️ Building changelog") {
            buildChangelog(pullRequestList)
        }
    }

    private suspend fun fetchPRsForMilestone(milestoneInfo: MilestoneInfo): List<PullRequestInfo> {
        return utils.actions.group("ℹ️ Fetching PRs for milestone ${milestoneInfo.title}") {
            pRsForMilestone(
                milestoneNumber = milestoneInfo.number,
                closedPRs = milestoneInfo.closedPRs
            )
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