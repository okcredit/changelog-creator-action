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
                        created_at = (element.createdAt)?.toInstant(),
                        updated_at = (element.updatedAt)?.toInstant(),
                        closedPRs = element.closedIssues,
                        closedAt = (element.closedAt)?.toInstant(),
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