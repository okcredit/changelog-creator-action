package usecase

import data.GithubClient
import data.request.MilestoneRequest
import kotlinx.coroutines.supervisorScope
import kotlinx.datetime.*
import models.MilestoneInfo
import utils.actions.info

/**
 * Fetches the last closed milestone from list of all milestones with status `closed`
 * It also checks for closed time of last closed milestone and throws an exception if it was closed more that 24 hours
 * ago.
 */
class FetchLastClosedMilestone(private val githubClient: GithubClient) {

    suspend operator fun invoke() = supervisorScope {
        info("FetchLastClosedMilestone invoke")
        var page = 1
        var moreMilestoneExist = true
        val mergedMilestoneList = mutableListOf<MilestoneInfo>()
        while (moreMilestoneExist) {
            val milestoneResponse = githubClient.milestones(MilestoneRequest(state = "closed", page = page))
            milestoneResponse.forEach { element ->
                mergedMilestoneList.add(
                    MilestoneInfo(
                        number = element.number,
                        title = element.title ?: "",
                        created_at = (element.createdAt)?.toInstant(),
                        updated_at = (element.updatedAt)?.toInstant(),
                        closedPRs = element.closedIssues,
                        closedAt = (element.closedAt)?.toInstant(),
                    )
                )
            }
            if (milestoneResponse.size < MilestoneRequest.DEFAULT_PAGE_SIZE) {
                moreMilestoneExist = false
            } else {
                page++
            }
        }

        if (mergedMilestoneList.isEmpty()) {
            throw IllegalStateException("No closed milestones found")
        }

        mergedMilestoneList.sortByDescending { it.updated_at?.epochSeconds }

        val firstMilestone = mergedMilestoneList.first()
        val now = Clock.System.now()
        val systemTZ = TimeZone.currentSystemDefault()
        if(firstMilestone.closedAt != null && firstMilestone.closedAt < now.plus(-1, DateTimeUnit.DAY, systemTZ)) {
            // if no milestone closed in last 24 hours then throw utils.actions.error
            throw IllegalStateException("No milestone closed in last 24 hours")
        }
        return@supervisorScope firstMilestone
    }
}