package usecase

import data.GithubClient
import data.request.MilestoneRequest
import data.request.MilestoneRequest.Companion.DEFAULT_PAGE_SIZE
import kotlinx.coroutines.supervisorScope
import kotlinx.datetime.Instant
import kotlinx.datetime.toInstant
import models.PullRequestInfo

class GetPRsForMilestone(private val githubClient: GithubClient) {

    suspend operator fun invoke(milestone: Int, closedPRs: Int, milestoneClosedAt: Instant) = supervisorScope {
        var page = 1
        val mergedPRList = mutableListOf<PullRequestInfo>()
        var morePRsExist = true
        while (morePRsExist) {
            val pullRequests = githubClient.pullRequests(
                MilestoneRequest(
                    state = "closed",
                    sort = "updated",
                    direction = "desc",
                    page = page
                )
            )

            pullRequests.filter { it.milestone?.number == milestone && it.closed_at.toInstant() < milestoneClosedAt }
                .forEach { pr ->
                    mergedPRList.add(
                        PullRequestInfo(
                            number = pr.number,
                            title = pr.title,
                            htmlURL = pr.html_url,
                            mergedAt = pr.closed_at.toInstant(),
                            mergeCommitSha = pr.merge_commit_sha,
                            author = pr.user?.login ?: "",
                            labels = pr.labels?.map { it.name },
                            body = pr.body,
                            assignees = pr.assignees?.map { it.login },
                            requestedReviewers = pr.requested_reviewers.map { it.login }
                        )
                    )

                    if (mergedPRList.size == closedPRs) {
                        mergedPRList.sortByDescending { it.mergedAt.epochSeconds }
                        // early return if we have reached the number of PRs closed
                        return@supervisorScope mergedPRList
                    }
                }

            if (pullRequests.size < DEFAULT_PAGE_SIZE) {
                morePRsExist = false
            } else {
                page++
            }
        }

        if (mergedPRList.isEmpty()) {
            throw IllegalStateException("Found no Pull Requests for milestone")
        }

        mergedPRList.sortByDescending { it.mergedAt.epochSeconds }
        return@supervisorScope mergedPRList.toList()
    }
}