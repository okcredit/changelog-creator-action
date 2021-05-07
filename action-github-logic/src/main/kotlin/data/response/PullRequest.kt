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
    val body: String?, // ## What does this PR do?- Remove getHelpNumber usecase and added it in remoteconfig## Why is this PR needed?- Code hygiene and avoid blocking call## Links- https://okcredit.atlassian.net/browse/CA-578?atlOrigin=eyJpIjoiNDI4Y2MwM2QwMGQ3NDlhMDk5YzU2YTEzYWZiZjJhOTYiLCJwIjoiaiJ9## Devices- [ ] Any
    @SerialName("closed_at")
    val closedAt: String?, // 2021-03-02T07:49:49Z
    @SerialName("comments_url")
    val commentsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/issues/2445/comments
    @SerialName("commits_url")
    val commitsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/pulls/2445/commits
    @SerialName("created_at")
    val createdAt: String?, // 2021-02-26T10:43:15Z
    @SerialName("diff_url")
    val diffUrl: String?, // https://github.com/okcredit/merchant-android/pull/2445.diff
    @SerialName("draft")
    val draft: Boolean, // false
    @SerialName("head")
    val head: Branch?,
    @SerialName("html_url")
    val htmlUrl: String?, // https://github.com/okcredit/merchant-android/pull/2445
    @SerialName("id")
    val id: String, // 580769940
    @SerialName("issue_url")
    val issueUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/issues/2445
    @SerialName("labels")
    val labels: List<Label?>?,
    @SerialName("_links")
    val links: Links?,
    @SerialName("locked")
    val locked: Boolean, // false
    @SerialName("merge_commit_sha")
    val mergeCommitSha: String?, // bf2076f037b75f587090623aa7d07564f629b4c9
    @SerialName("merged_at")
    val mergedAt: String?, // 2021-03-02T07:49:49Z
    @SerialName("milestone")
    val milestone: Milestone?,
    @SerialName("node_id")
    val nodeId: String?, // MDExOlB1bGxSZXF1ZXN0NTgwNzY5OTQw
    @SerialName("number")
    val number: Int, // 2445
    @SerialName("patch_url")
    val patchUrl: String?, // https://github.com/okcredit/merchant-android/pull/2445.patch
    @SerialName("requested_reviewers")
    val requestedReviewers: List<GithubUser?>?,
    @SerialName("requested_teams")
    val requestedTeams: List<GithubUser?>?,
    @SerialName("review_comment_url")
    val reviewCommentUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/pulls/comments{/number}
    @SerialName("review_comments_url")
    val reviewCommentsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/pulls/2445/comments
    @SerialName("state")
    val state: String?, // closed
    @SerialName("statuses_url")
    val statusesUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/statuses/c2d84136a4da316d5a593a17b8b4cfa1a8c7bab4
    @SerialName("title")
    val title: String?, // Remove GetHelpNumber usecase and added helpNumber in remoteConfig
    @SerialName("updated_at")
    val updatedAt: String?, // 2021-04-30T09:27:09Z
    @SerialName("url")
    val url: String?, // https://api.github.com/repos/okcredit/merchant-android/pulls/2445
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
            val avatarUrl: String?, // https://avatars.githubusercontent.com/u/70567675?v=4
            @SerialName("events_url")
            val eventsUrl: String?, // https://api.github.com/users/MohiteshAeron/events{/privacy}
            @SerialName("followers_url")
            val followersUrl: String?, // https://api.github.com/users/MohiteshAeron/followers
            @SerialName("following_url")
            val followingUrl: String?, // https://api.github.com/users/MohiteshAeron/following{/other_user}
            @SerialName("gists_url")
            val gistsUrl: String?, // https://api.github.com/users/MohiteshAeron/gists{/gist_id}
            @SerialName("gravatar_id")
            val gravatarId: String?,
            @SerialName("html_url")
            val htmlUrl: String?, // https://github.com/MohiteshAeron
            @SerialName("id")
            val id: String, // 70567675
            @SerialName("login")
            val login: String?, // MohiteshAeron
            @SerialName("node_id")
            val nodeId: String?, // MDQ6VXNlcjcwNTY3Njc1
            @SerialName("organizations_url")
            val organizationsUrl: String?, // https://api.github.com/users/MohiteshAeron/orgs
            @SerialName("received_events_url")
            val receivedEventsUrl: String?, // https://api.github.com/users/MohiteshAeron/received_events
            @SerialName("repos_url")
            val reposUrl: String?, // https://api.github.com/users/MohiteshAeron/repos
            @SerialName("site_admin")
            val siteAdmin: Boolean, // false
            @SerialName("starred_url")
            val starredUrl: String?, // https://api.github.com/users/MohiteshAeron/starred{/owner}{/repo}
            @SerialName("subscriptions_url")
            val subscriptionsUrl: String?, // https://api.github.com/users/MohiteshAeron/subscriptions
            @SerialName("type")
            val type: String?, // User
            @SerialName("url")
            val url: String? // https://api.github.com/users/MohiteshAeron
        )
    }

        @Serializable
    data class Branch(
        @SerialName("label")
        val label: String?, // okcredit:develop
        @SerialName("ref")
        val ref: String?, // develop
        @SerialName("repo")
        val repo: Repo?,
        @SerialName("sha")
        val sha: String?, // 6b33b277accd769ba291c0f276965394c6b3d278
        @SerialName("user")
        val user: GithubUser?
    ) {
                @Serializable
        data class Repo(
            @SerialName("archive_url")
            val archiveUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/{archive_format}{/ref}
            @SerialName("archived")
            val archived: Boolean, // false
            @SerialName("assignees_url")
            val assigneesUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/assignees{/user}
            @SerialName("blobs_url")
            val blobsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/git/blobs{/sha}
            @SerialName("branches_url")
            val branchesUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/branches{/branch}
            @SerialName("clone_url")
            val cloneUrl: String?, // https://github.com/okcredit/merchant-android.git
            @SerialName("collaborators_url")
            val collaboratorsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/collaborators{/collaborator}
            @SerialName("comments_url")
            val commentsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/comments{/number}
            @SerialName("commits_url")
            val commitsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/commits{/sha}
            @SerialName("compare_url")
            val compareUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/compare/{base}...{head}
            @SerialName("contents_url")
            val contentsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/contents/{+path}
            @SerialName("contributors_url")
            val contributorsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/contributors
            @SerialName("created_at")
            val createdAt: String?, // 2018-10-09T12:33:43Z
            @SerialName("default_branch")
            val defaultBranch: String?, // develop
            @SerialName("deployments_url")
            val deploymentsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/deployments
            @SerialName("description")
            val description: String?, // Android app for merchants
            @SerialName("disabled")
            val disabled: Boolean, // false
            @SerialName("downloads_url")
            val downloadsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/downloads
            @SerialName("events_url")
            val eventsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/events
            @SerialName("fork")
            val fork: Boolean, // false
            @SerialName("forks")
            val forks: Int, // 0
            @SerialName("forks_count")
            val forksCount: Int, // 0
            @SerialName("forks_url")
            val forksUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/forks
            @SerialName("full_name")
            val fullName: String?, // okcredit/merchant-android
            @SerialName("git_commits_url")
            val gitCommitsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/git/commits{/sha}
            @SerialName("git_refs_url")
            val gitRefsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/git/refs{/sha}
            @SerialName("git_tags_url")
            val gitTagsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/git/tags{/sha}
            @SerialName("git_url")
            val gitUrl: String?, // git://github.com/okcredit/merchant-android.git
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
            val hooksUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/hooks
            @SerialName("html_url")
            val htmlUrl: String?, // https://github.com/okcredit/merchant-android
            @SerialName("id")
            val id: String, // 152247908
            @SerialName("issue_comment_url")
            val issueCommentUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/issues/comments{/number}
            @SerialName("issue_events_url")
            val issueEventsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/issues/events{/number}
            @SerialName("issues_url")
            val issuesUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/issues{/number}
            @SerialName("keys_url")
            val keysUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/keys{/key_id}
            @SerialName("labels_url")
            val labelsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/labels{/name}
            @SerialName("language")
            val language: String?, // Kotlin
            @SerialName("languages_url")
            val languagesUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/languages
            @SerialName("license")
            val license: String?, // null
            @SerialName("merges_url")
            val mergesUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/merges
            @SerialName("milestones_url")
            val milestonesUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/milestones{/number}
            @SerialName("mirror_url")
            val mirrorUrl: String?, // null
            @SerialName("name")
            val name: String?, // merchant-android
            @SerialName("node_id")
            val nodeId: String?, // MDEwOlJlcG9zaXRvcnkxNTIyNDc5MDg=
            @SerialName("notifications_url")
            val notificationsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/notifications{?since,all,participating}
            @SerialName("open_issues")
            val openIssues: Int, // 94
            @SerialName("open_issues_count")
            val openIssuesCount: Int, // 94
            @SerialName("owner")
            val owner: GithubUser?,
            @SerialName("private")
            val `private`: Boolean, // true
            @SerialName("pulls_url")
            val pullsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/pulls{/number}
            @SerialName("pushed_at")
            val pushedAt: String?, // 2021-05-07T09:44:28Z
            @SerialName("releases_url")
            val releasesUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/releases{/id}
            @SerialName("size")
            val size: Long, // 238642
            @SerialName("ssh_url")
            val sshUrl: String?, // git@github.com:okcredit/merchant-android.git
            @SerialName("stargazers_count")
            val stargazersCount: Int, // 0
            @SerialName("stargazers_url")
            val stargazersUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/stargazers
            @SerialName("statuses_url")
            val statusesUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/statuses/{sha}
            @SerialName("subscribers_url")
            val subscribersUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/subscribers
            @SerialName("subscription_url")
            val subscriptionUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/subscription
            @SerialName("svn_url")
            val svnUrl: String?, // https://github.com/okcredit/merchant-android
            @SerialName("tags_url")
            val tagsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/tags
            @SerialName("teams_url")
            val teamsUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/teams
            @SerialName("trees_url")
            val treesUrl: String?, // https://api.github.com/repos/okcredit/merchant-android/git/trees{/sha}
            @SerialName("updated_at")
            val updatedAt: String?, // 2021-05-07T08:22:21Z
            @SerialName("url")
            val url: String?, // https://api.github.com/repos/okcredit/merchant-android
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
        val name: String?, // Core Experience
        @SerialName("node_id")
        val nodeId: String?, // MDU6TGFiZWwxOTQzMTI1MTEz
        @SerialName("url")
        val url: String? // https://api.github.com/repos/okcredit/merchant-android/labels/Core%20Experience
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
            val href: String? // https://api.github.com/repos/okcredit/merchant-android/issues/2445/comments
        )

                @Serializable
        data class Commits(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/okcredit/merchant-android/pulls/2445/commits
        )

                @Serializable
        data class Html(
            @SerialName("href")
            val href: String? // https://github.com/okcredit/merchant-android/pull/2445
        )

                @Serializable
        data class Issue(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/okcredit/merchant-android/issues/2445
        )

                @Serializable
        data class ReviewComment(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/okcredit/merchant-android/pulls/comments{/number}
        )

                @Serializable
        data class ReviewComments(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/okcredit/merchant-android/pulls/2445/comments
        )

                @Serializable
        data class Self(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/okcredit/merchant-android/pulls/2445
        )

                @Serializable
        data class Statuses(
            @SerialName("href")
            val href: String? // https://api.github.com/repos/okcredit/merchant-android/statuses/c2d84136a4da316d5a593a17b8b4cfa1a8c7bab4
        )
    }
}