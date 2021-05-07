package data.response

import kotlinx.serialization.Serializable

@Serializable
data class Milestone(
    val closed_at: String?, // 2013-02-12T13:22:01Z
    val closed_issues: Int?, // 8
    val created_at: String?, // 2011-04-10T20:09:31Z
    val creator: GithubUser?,
    val description: String?, // Tracking milestone for version 1.0
    val due_on: String?, // 2012-10-09T23:39:01Z
    val html_url: String?, // https://github.com/octocat/Hello-World/milestones/v1.0
    val id: Int, // 1002604
    val labels_url: String?, // https://api.github.com/repos/octocat/Hello-World/milestones/1/labels
    val node_id: String?, // MDk6TWlsZXN0b25lMTAwMjYwNA==
    val number: Int, // 1
    val open_issues: Int, // 4
    val state: String?, // open
    val title: String?, // v1.0
    val updated_at: String?, // 2014-03-03T18:58:10Z
    val url: String? // https://api.github.com/repos/octocat/Hello-World/milestones/1
)