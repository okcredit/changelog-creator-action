package usecase

import data.GithubClient
import data.request.MilestoneRequest
import kotlinx.coroutines.supervisorScope
import kotlinx.datetime.*
import models.MilestoneInfo
import utils.actions.info

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
                        created_at = (element.created_at)?.toInstant(),
                        updated_at = (element.updated_at)?.toInstant(),
                        closedPRs = element.closed_issues ?: 0,
                        closedAt = (element.closed_at)?.toInstant(),
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
            // if no milestone closed in last 24 hours then throw error
            throw IllegalStateException("No milestone closed in last 24 hours")
        }
        return@supervisorScope firstMilestone
    }
}