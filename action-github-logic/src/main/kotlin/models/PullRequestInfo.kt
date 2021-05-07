package models

import kotlinx.datetime.Instant

data class PullRequestInfo(
    val number: Int,
    val title: String,
    val htmlURL: String,
    val mergedAt: Instant?,
    val mergeCommitSha: String,
    val author: String,
    val labels: List<String>?,
    val body: String,
    val assignees: List<String>?,
    val requestedReviewers: List<String>?,
)
