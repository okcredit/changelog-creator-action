package usecase

import data.GithubClient
import data.request.MilestoneRequest
import kotlinx.coroutines.supervisorScope
import kotlinx.datetime.toInstant
import models.MilestoneInfo

class FetchMilestoneByName(private val githubClient: GithubClient) {

    suspend operator fun invoke(name: String) = supervisorScope {
        var page = 1
        var moreMilestoneExist = true
        while (moreMilestoneExist) {
            val milestoneResponse = githubClient.milestones(MilestoneRequest(state = "all", page = page))
            milestoneResponse.forEach { element ->
                if (element.title == name) {
                    return@supervisorScope MilestoneInfo(
                        number = element.number,
                        title = element.title,
                        created_at = (element.created_at).toInstant(),
                        updated_at = (element.updated_at).toInstant(),
                        closedPRs = element.closed_issues,
                        closedAt = (element.closed_at).toInstant(),
                    )
                }
            }
            if (milestoneResponse.size < MilestoneRequest.DEFAULT_PAGE_SIZE) {
                moreMilestoneExist = false
            } else {
                page++
            }
        }

        throw IllegalStateException("No milestone found with name - $name")
    }
}