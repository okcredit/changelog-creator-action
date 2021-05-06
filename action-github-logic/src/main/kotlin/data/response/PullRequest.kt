package data.response

import kotlinx.serialization.Serializable

@Serializable
data class PullRequest(
    val _links: Links,
    val active_lock_reason: String, // too heated
    val assignee: GithubUser?,
    val assignees: List<GithubUser>?,
    val author_association: String, // OWNER
    val auto_merge: String?, // null
    val base: Branch,
    val body: String, // Please pull these awesome changes in!
    val closed_at: String, // 2011-01-26T19:01:12Z
    val comments_url: String, // https://api.github.com/repos/octocat/Hello-World/issues/1347/comments
    val commits_url: String, // https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits
    val created_at: String, // 2011-01-26T19:01:12Z
    val diff_url: String, // https://github.com/octocat/Hello-World/pull/1347.diff
    val draft: Boolean, // false
    val head: Branch,
    val html_url: String, // https://github.com/octocat/Hello-World/pull/1347
    val id: Int, // 1
    val issue_url: String, // https://api.github.com/repos/octocat/Hello-World/issues/1347
    val labels: List<Label>?,
    val locked: Boolean, // true
    val merge_commit_sha: String, // e5bd3914e2e596debea16f433f57875b5b90bcd6
    val merged_at: String, // 2011-01-26T19:01:12Z
    val milestone: Milestone?,
    val node_id: String, // MDExOlB1bGxSZXF1ZXN0MQ==
    val number: Int, // 1347
    val patch_url: String, // https://github.com/octocat/Hello-World/pull/1347.patch
    val requested_reviewers: List<GithubUser>,
    val requested_teams: List<RequestedTeam>,
    val review_comment_url: String, // https://api.github.com/repos/octocat/Hello-World/pulls/comments{/number}
    val review_comments_url: String, // https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments
    val state: String, // open
    val statuses_url: String, // https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e
    val title: String, // Amazing new feature
    val updated_at: String, // 2011-01-26T19:01:12Z
    val url: String, // https://api.github.com/repos/octocat/Hello-World/pulls/1347
    val user: GithubUser?
) {
    @Serializable
    data class Links(
        val comments: LinkHref,
        val commits: LinkHref,
        val html: LinkHref,
        val issue: LinkHref,
        val review_comment: LinkHref,
        val review_comments: LinkHref,
        val self: LinkHref,
        val statuses: LinkHref
    ) {
        @Serializable
        data class LinkHref(
            val href: String // https://api.github.com/repos/octocat/Hello-World/issues/1347/comments
        )
    }

    @Serializable
    data class Branch(
        val label: String, // octocat:master
        val ref: String, // master
        val repo: Repo,
        val sha: String, // 6dcb09b5b57875f334f61aebed695e2e4193db5e
        val user: GithubUser
    ) {
        @Serializable
        data class Repo(
            val allow_merge_commit: Boolean, // true
            val allow_rebase_merge: Boolean, // true
            val allow_squash_merge: Boolean, // true
            val archive_url: String, // https://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}
            val archived: Boolean, // false
            val assignees_url: String, // https://api.github.com/repos/octocat/Hello-World/assignees{/user}
            val blobs_url: String, // https://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}
            val branches_url: String, // https://api.github.com/repos/octocat/Hello-World/branches{/branch}
            val clone_url: String, // https://github.com/octocat/Hello-World.git
            val collaborators_url: String, // https://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}
            val comments_url: String, // https://api.github.com/repos/octocat/Hello-World/comments{/number}
            val commits_url: String, // https://api.github.com/repos/octocat/Hello-World/commits{/sha}
            val compare_url: String, // https://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}
            val contents_url: String, // https://api.github.com/repos/octocat/Hello-World/contents/{+path}
            val contributors_url: String, // https://api.github.com/repos/octocat/Hello-World/contributors
            val created_at: String, // 2011-01-26T19:01:12Z
            val default_branch: String, // master
            val delete_branch_on_merge: Boolean, // true
            val deployments_url: String, // https://api.github.com/repos/octocat/Hello-World/deployments
            val description: String, // This your first repo!
            val disabled: Boolean, // false
            val downloads_url: String, // https://api.github.com/repos/octocat/Hello-World/downloads
            val events_url: String, // https://api.github.com/repos/octocat/Hello-World/events
            val fork: Boolean, // false
            val forks: Int, // 1
            val forks_count: Int, // 9
            val forks_url: String, // https://api.github.com/repos/octocat/Hello-World/forks
            val full_name: String, // octocat/Hello-World
            val git_commits_url: String, // https://api.github.com/repos/octocat/Hello-World/git/commits{/sha}
            val git_refs_url: String, // https://api.github.com/repos/octocat/Hello-World/git/refs{/sha}
            val git_tags_url: String, // https://api.github.com/repos/octocat/Hello-World/git/tags{/sha}
            val git_url: String, // git:github.com/octocat/Hello-World.git
            val has_downloads: Boolean, // true
            val has_issues: Boolean, // true
            val has_pages: Boolean, // false
            val has_projects: Boolean, // true
            val has_wiki: Boolean, // true
            val homepage: String, // https://github.com
            val hooks_url: String, // https://api.github.com/repos/octocat/Hello-World/hooks
            val html_url: String, // https://github.com/octocat/Hello-World
            val id: Int, // 1296269
            val is_template: Boolean, // true
            val issue_comment_url: String, // https://api.github.com/repos/octocat/Hello-World/issues/comments{/number}
            val issue_events_url: String, // https://api.github.com/repos/octocat/Hello-World/issues/events{/number}
            val issues_url: String, // https://api.github.com/repos/octocat/Hello-World/issues{/number}
            val keys_url: String, // https://api.github.com/repos/octocat/Hello-World/keys{/key_id}
            val labels_url: String, // https://api.github.com/repos/octocat/Hello-World/labels{/name}
            val language: String?, // null
            val languages_url: String, // https://api.github.com/repos/octocat/Hello-World/languages
            val license: License,
            val merges_url: String, // https://api.github.com/repos/octocat/Hello-World/merges
            val milestones_url: String, // https://api.github.com/repos/octocat/Hello-World/milestones{/number}
            val mirror_url: String, // git:git.example.com/octocat/Hello-World
            val name: String, // Hello-World
            val network_count: Int, // 0
            val node_id: String, // MDEwOlJlcG9zaXRvcnkxMjk2MjY5
            val notifications_url: String, // https://api.github.com/repos/octocat/Hello-World/notifications{?since,all,participating}
            val open_issues: Int, // 1
            val open_issues_count: Int, // 0
            val owner: GithubUser,
            val permissions: Permissions,
            val `private`: Boolean, // false
            val pulls_url: String, // https://api.github.com/repos/octocat/Hello-World/pulls{/number}
            val pushed_at: String, // 2011-01-26T19:06:43Z
            val releases_url: String, // https://api.github.com/repos/octocat/Hello-World/releases{/id}
            val size: Int, // 108
            val ssh_url: String, // git@github.com:octocat/Hello-World.git
            val stargazers_count: Int, // 80
            val stargazers_url: String, // https://api.github.com/repos/octocat/Hello-World/stargazers
            val statuses_url: String, // https://api.github.com/repos/octocat/Hello-World/statuses/{sha}
            val subscribers_count: Int, // 42
            val subscribers_url: String, // https://api.github.com/repos/octocat/Hello-World/subscribers
            val subscription_url: String, // https://api.github.com/repos/octocat/Hello-World/subscription
            val svn_url: String, // https://svn.github.com/octocat/Hello-World
            val tags_url: String, // https://api.github.com/repos/octocat/Hello-World/tags
            val teams_url: String, // https://api.github.com/repos/octocat/Hello-World/teams
            val temp_clone_token: String, // ABTLWHOULUVAXGTRYU7OC2876QJ2O
            val template_repository: String?, // null
            val topics: List<String>,
            val trees_url: String, // https://api.github.com/repos/octocat/Hello-World/git/trees{/sha}
            val updated_at: String, // 2011-01-26T19:14:43Z
            val url: String, // https://api.github.com/repos/octocat/Hello-World
            val visibility: String, // public
            val watchers: Int, // 1
            val watchers_count: Int // 80
        ) {
            @Serializable
            data class License(
                val html_url: String, // https://github.com/licenses/mit
                val key: String, // mit
                val name: String, // MIT License
                val node_id: String, // MDc6TGljZW5zZW1pdA==
                val spdx_id: String, // MIT
                val url: String // https://api.github.com/licenses/mit
            )

            @Serializable
            data class Permissions(
                val admin: Boolean, // false
                val pull: Boolean, // true
                val push: Boolean // false
            )
        }
    }

    @Serializable
    data class Label(
        val color: String, // f29513
        val default: Boolean, // true
        val description: String, // Something isn't working
        val id: Int, // 208045946
        val name: String, // bug
        val node_id: String, // MDU6TGFiZWwyMDgwNDU5NDY=
        val url: String // https://api.github.com/repos/octocat/Hello-World/labels/bug
    )

    @Serializable
    data class RequestedTeam(
        val description: String, // A great team.
        val html_url: String, // https://github.com/orgs/github/teams/justice-league
        val id: Int, // 1
        val members_url: String, // https://api.github.com/teams/1/members{/member}
        val name: String, // Justice League
        val node_id: String, // MDQ6VGVhbTE=
        val permission: String, // admin
        val privacy: String, // closed
        val repositories_url: String, // https://api.github.com/teams/1/repos
        val slug: String, // justice-league
        val url: String // https://api.github.com/teams/1
    )
}