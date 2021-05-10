package data.response

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class Milestone(
    @SerialName("closed_at")
    val closedAt: String?, // null
    @SerialName("closed_issues")
    val closedIssues: Int, // 0
    @SerialName("created_at")
    val createdAt: String?, // 2021-05-07T05:00:30Z
    @SerialName("creator")
    val creator: GithubUser?,
    @SerialName("description")
    val description: String?,
    @SerialName("due_on")
    val dueOn: String?, // null
    @SerialName("html_url")
    val htmlUrl: String?, // https://github.com/{owner}{repo}/milestone/148
    @SerialName("id")
    val id: Int, // 6735696
    @SerialName("labels_url")
    val labelsUrl: String?, // https://api.github.com/repos/{owner}{repo}/milestones/{milestone_number}/labels
    @SerialName("node_id")
    val nodeId: String?, // {id}
    @SerialName("number")
    val number: Int, // {milestone_number}
    @SerialName("open_issues")
    val openIssues: Int, // 1
    @SerialName("state")
    val state: String?, // open
    @SerialName("title")
    val title: String?, // v2.44.4
    @SerialName("updated_at")
    val updatedAt: String?, // 2021-05-07T05:00:40Z
    @SerialName("url")
    val url: String? // https://api.github.com/repos/{owner}{repo}/milestones/{milestone_number}
)