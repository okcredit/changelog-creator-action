package data.response

import kotlinx.serialization.SerialName
import kotlinx.serialization.Serializable

@Serializable
data class PullRequest(
    @SerialName("active_lock_reason")
    val activeLockReason: String?, // null
    @SerialName("assignee")
    val assignee: GithubUser?,
    @SerialName("assignees")
    val assignees: List<GithubUser?>?,
    @SerialName("author_association")
    val authorAssociation: String?, // COLLABORATOR
    @SerialName("auto_merge")
    val autoMerge: AutoMerge?,
    @SerialName("base")
    val base: Branch?,
    @SerialName("body")
    val body: String?,
    @SerialName("closed_at")
    val closedAt: String?, // 2021-03-02T07:49:49Z
    @SerialName("comments_url")
    val commentsUrl: String?,
    @SerialName("commits_url")
    val commitsUrl: String?,
    @SerialName("created_at")
    val createdAt: String?,
    @SerialName("diff_url")
    val diffUrl: String?,
    @SerialName("draft")
    val draft: Boolean, // false
    @SerialName("head")
    val head: Branch?,
    @SerialName("html_url")
    val htmlUrl: String?,
    @SerialName("id")
    val id: String, // 580769940
    @SerialName("issue_url")
    val issueUrl: String?,
    @SerialName("labels")
    val labels: List<Label?>?,
    @SerialName("_links")
    val links: Links?,
    @SerialName("locked")
    val locked: Boolean, // false
    @SerialName("merge_commit_sha")
    val mergeCommitSha: String?,
    @SerialName("merged_at")
    val mergedAt: String?, // 2021-03-02T07:49:49Z
    @SerialName("milestone")
    val milestone: Milestone?,
    @SerialName("node_id")
    val nodeId: String?, // MDExOlB1bGxSZXF1ZXN0NTgwNzY5OTQw
    @SerialName("number")
    val number: Int, // {issue_number}
    @SerialName("patch_url")
    val patchUrl: String?,
    @SerialName("requested_reviewers")
    val requestedReviewers: List<GithubUser?>?,
    @SerialName("requested_teams")
    val requestedTeams: List<GithubUser?>?,
    @SerialName("review_comment_url")
    val reviewCommentUrl: String?,
    @SerialName("review_comments_url")
    val reviewCommentsUrl: String?,
    @SerialName("state")
    val state: String?, // closed
    @SerialName("statuses_url")
    val statusesUrl: String?,
    @SerialName("title")
    val title: String?,
    @SerialName("updated_at")
    val updatedAt: String?, // 2021-04-30T09:27:09Z
    @SerialName("url")
    val url: String?,
    @SerialName("user")
    val user: GithubUser?
) {

    @Serializable
    data class AutoMerge(
        @SerialName("commit_message")
        val commitMessage: String?,
        @SerialName("commit_title")
        val commitTitle: String?, // Use label to auto update PRs (#2890)
        @SerialName("enabled_by")
        val enabledBy: EnabledBy?,
        @SerialName("merge_method")
        val mergeMethod: String? // squash
    ) {
        @Serializable
        data class EnabledBy(
            @SerialName("avatar_url")
            val avatarUrl: String?,
            @SerialName("events_url")
            val eventsUrl: String?,
            @SerialName("followers_url")
            val followersUrl: String?,
            @SerialName("following_url")
            val followingUrl: String?,
            @SerialName("gists_url")
            val gistsUrl: String?,
            @SerialName("gravatar_id")
            val gravatarId: String?,
            @SerialName("html_url")
            val htmlUrl: String?, // https://github.com/{github_user}
            @SerialName("id")
            val id: String, // 70567675
            @SerialName("login")
            val login: String?, // {github_user}
            @SerialName("node_id")
            val nodeId: String?, // MDQ6VXNlcjcwNTY3Njc1
            @SerialName("organizations_url")
            val organizationsUrl: String?,
            @SerialName("received_events_url")
            val receivedEventsUrl: String?, // https://api.github.com/users/{github_user}/received_events
            @SerialName("repos_url")
            val reposUrl: String?, // https://api.github.com/users/{github_user}/repos
            @SerialName("site_admin")
            val siteAdmin: Boolean, // false
            @SerialName("starred_url")
            val starredUrl: String?, // https://api.github.com/users/{github_user}/starred{/owner}{/repo}
            @SerialName("subscriptions_url")
            val subscriptionsUrl: String?, // https://api.github.com/users/{github_user}/subscriptions
            @SerialName("type")
            val type: String?, // User
            @SerialName("url")
            val url: String? // https://api.github.com/users/{github_user}
        )
    }

    @Serializable
    data class Branch(
        @SerialName("label")
        val label: String?,
        @SerialName("ref")
        val ref: String?, // develop
        @SerialName("repo")
        val repo: Repo?,
        @SerialName("sha")
        val sha: String?,
        @SerialName("user")
        val user: GithubUser?
    ) {
        @Serializable
        data class Repo(
            @SerialName("archive_url")
            val archiveUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/{archive_format}{/ref}
            @SerialName("archived")
            val archived: Boolean, // false
            @SerialName("assignees_url")
            val assigneesUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/assignees{/user}
            @SerialName("blobs_url")
            val blobsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/git/blobs{/sha}
            @SerialName("branches_url")
            val branchesUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/branches{/branch}
            @SerialName("clone_url")
            val cloneUrl: String?, // https://github.com/{/owner}{/repo}.git
            @SerialName("collaborators_url")
            val collaboratorsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/collaborators{/collaborator}
            @SerialName("comments_url")
            val commentsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/comments{/number}
            @SerialName("commits_url")
            val commitsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/commits{/sha}
            @SerialName("compare_url")
            val compareUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/compare/{base}...{head}
            @SerialName("contents_url")
            val contentsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/contents/{+path}
            @SerialName("contributors_url")
            val contributorsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/contributors
            @SerialName("created_at")
            val createdAt: String?, // 2018-10-09T12:33:43Z
            @SerialName("default_branch")
            val defaultBranch: String?, // develop
            @SerialName("deployments_url")
            val deploymentsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/deployments
            @SerialName("description")
            val description: String?, // Android app for merchants
            @SerialName("disabled")
            val disabled: Boolean, // false
            @SerialName("downloads_url")
            val downloadsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/downloads
            @SerialName("events_url")
            val eventsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/events
            @SerialName("fork")
            val fork: Boolean, // false
            @SerialName("forks")
            val forks: Int, // 0
            @SerialName("forks_count")
            val forksCount: Int, // 0
            @SerialName("forks_url")
            val forksUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/forks
            @SerialName("full_name")
            val fullName: String?, // {/owner}{/repo}
            @SerialName("git_commits_url")
            val gitCommitsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/git/commits{/sha}
            @SerialName("git_refs_url")
            val gitRefsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/git/refs{/sha}
            @SerialName("git_tags_url")
            val gitTagsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/git/tags{/sha}
            @SerialName("git_url")
            val gitUrl: String?, // git://github.com/{/owner}{/repo}.git
            @SerialName("has_downloads")
            val hasDownloads: Boolean, // true
            @SerialName("has_issues")
            val hasIssues: Boolean, // true
            @SerialName("has_pages")
            val hasPages: Boolean, // false
            @SerialName("has_projects")
            val hasProjects: Boolean, // true
            @SerialName("has_wiki")
            val hasWiki: Boolean, // true
            @SerialName("homepage")
            val homepage: String?,
            @SerialName("hooks_url")
            val hooksUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/hooks
            @SerialName("html_url")
            val htmlUrl: String?, // https://github.com/{/owner}{/repo}
            @SerialName("id")
            val id: String, // 152247908
            @SerialName("issue_comment_url")
            val issueCommentUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/issues/comments{/number}
            @SerialName("issue_events_url")
            val issueEventsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/issues/events{/number}
            @SerialName("issues_url")
            val issuesUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/issues{/number}
            @SerialName("keys_url")
            val keysUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/keys{/key_id}
            @SerialName("labels_url")
            val labelsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/labels{/name}
            @SerialName("language")
            val language: String?, // Kotlin
            @SerialName("languages_url")
            val languagesUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/languages
            @SerialName("license")
            val license: String?, // null
            @SerialName("merges_url")
            val mergesUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/merges
            @SerialName("milestones_url")
            val milestonesUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/milestones{/number}
            @SerialName("mirror_url")
            val mirrorUrl: String?, // null
            @SerialName("name")
            val name: String?, // merchant-android
            @SerialName("node_id")
            val nodeId: String?, // MDEwOlJlcG9zaXRvcnkxNTIyNDc5MDg=
            @SerialName("notifications_url")
            val notificationsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/notifications{?since,all,participating}
            @SerialName("open_issues")
            val openIssues: Int, // 94
            @SerialName("open_issues_count")
            val openIssuesCount: Int, // 94
            @SerialName("owner")
            val owner: GithubUser?,
            @SerialName("private")
            val `private`: Boolean, // true
            @SerialName("pulls_url")
            val pullsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/pulls{/number}
            @SerialName("pushed_at")
            val pushedAt: String?, // 2021-05-07T09:44:28Z
            @SerialName("releases_url")
            val releasesUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/releases{/id}
            @SerialName("size")
            val size: Long, // 238642
            @SerialName("ssh_url")
            val sshUrl: String?, // git@github.com:{/owner}{/repo}.git
            @SerialName("stargazers_count")
            val stargazersCount: Int, // 0
            @SerialName("stargazers_url")
            val stargazersUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/stargazers
            @SerialName("statuses_url")
            val statusesUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/statuses/{sha}
            @SerialName("subscribers_url")
            val subscribersUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/subscribers
            @SerialName("subscription_url")
            val subscriptionUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/subscription
            @SerialName("svn_url")
            val svnUrl: String?, // https://github.com/{/owner}{/repo}
            @SerialName("tags_url")
            val tagsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/tags
            @SerialName("teams_url")
            val teamsUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/teams
            @SerialName("trees_url")
            val treesUrl: String?, // https://api.github.com/repos/{/owner}{/repo}/git/trees{/sha}
            @SerialName("updated_at")
            val updatedAt: String?, // 2021-05-07T08:22:21Z
            @SerialName("url")
            val url: String?, // https://api.github.com/repos/{/owner}{/repo}
            @SerialName("watchers")
            val watchers: Int, // 0
            @SerialName("watchers_count")
            val watchersCount: Int // 0
        )
    }

    @Serializable
    data class Label(
        @SerialName("color")
        val color: String?, // 164089
        @SerialName("default")
        val default: Boolean, // false
        @SerialName("description")
        val description: String?,
        @SerialName("id")
        val id: String, // 1943125113
        @SerialName("name")
        val name: String?,
        @SerialName("node_id")
        val nodeId: String?, // MDU6TGFiZWwxOTQzMTI1MTEz
        @SerialName("url")
        val url: String? // https://api.github.com/repos/{/owner}{/repo}/labels/{name}
    )

    @Serializable
    data class Links(
        @SerialName("comments")
        val comments: Comments?,
        @SerialName("commits")
        val commits: Commits?,
        @SerialName("html")
        val html: Html?,
        @SerialName("issue")
        val issue: Issue?,
        @SerialName("review_comment")
        val reviewComment: ReviewComment?,
        @SerialName("review_comments")
        val reviewComments: ReviewComments?,
        @SerialName("self")
        val self: Self?,
        @SerialName("statuses")
        val statuses: Statuses?
    ) {
        @Serializable
        data class Comments(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/{/owner}{/repo}/issues/{issue_number}/comments
        )

        @Serializable
        data class Commits(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/{/owner}{/repo}/pulls/{issue_number}/commits
        )

        @Serializable
        data class Html(
            @SerialName("href")
            val href: String? // https://github.com/{/owner}{/repo}/pull/{issue_number}
        )

        @Serializable
        data class Issue(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/{/owner}{/repo}/issues/{issue_number}
        )

        @Serializable
        data class ReviewComment(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/{/owner}{/repo}/pulls/comments{/number}
        )

        @Serializable
        data class ReviewComments(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/{/owner}{/repo}/pulls/{issue_number}/comments
        )

        @Serializable
        data class Self(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/{/owner}{/repo}/pulls/{issue_number}
        )

        @Serializable
        data class Statuses(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/{/owner}{/repo}/statuses/{commit_id}
        )
    }
}