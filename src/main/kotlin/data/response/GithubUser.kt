package data.response

import kotlinx.serialization.Serializable

@Serializable
data class GithubUser(
    val avatar_url: String, // https://github.com/images/error/octocat_happy.gif
    val events_url: String, // https://api.github.com/users/octocat/events{/privacy}
    val followers_url: String, // https://api.github.com/users/octocat/followers
    val following_url: String, // https://api.github.com/users/octocat/following{/other_user}
    val gists_url: String, // https://api.github.com/users/octocat/gists{/gist_id}
    val gravatar_id: String,
    val html_url: String, // https://github.com/octocat
    val id: Int, // 1
    val login: String, // octocat
    val node_id: String, // MDQ6VXNlcjE=
    val organizations_url: String, // https://api.github.com/users/octocat/orgs
    val received_events_url: String, // https://api.github.com/users/octocat/received_events
    val repos_url: String, // https://api.github.com/users/octocat/repos
    val site_admin: Boolean, // false
    val starred_url: String, // https://api.github.com/users/octocat/starred{/owner}{/repo}
    val subscriptions_url: String, // https://api.github.com/users/octocat/subscriptions
    val type: String, // User
    val url: String // https://api.github.com/users/octocat
)