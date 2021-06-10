package data.response

import kotlinx.serialization.Serializable

@Serializable
data class GithubUser(
    val avatar_url: String, // https://github.com/images/error/octocat_happy.gif
    val events_url: String, // https://api.github.com/users/{github_user}/events{/privacy}
    val followers_url: String, // https://api.github.com/users/{github_user}/followers
    val following_url: String, // https://api.github.com/users/{github_user}/following{/other_user}
    val gists_url: String, // https://api.github.com/users/{github_user}/gists{/gist_id}
    val gravatar_id: String,
    val html_url: String, // https://github.com/{github_user}
    val id: Int, // 1
    val login: String, // {github_user}
    val node_id: String, // MDQ6VXNlcjE=
    val organizations_url: String, // https://api.github.com/users/{github_user}/orgs
    val received_events_url: String, // https://api.github.com/users/{github_user}/received_events
    val repos_url: String, // https://api.github.com/users/{github_user}/repos
    val site_admin: Boolean, // false
    val starred_url: String, // https://api.github.com/users/{github_user}/starred{/owner}{/repo}
    val subscriptions_url: String, // https://api.github.com/users/{github_user}/subscriptions
    val type: String, // User
    val url: String // https://api.github.com/users/{github_user}
)