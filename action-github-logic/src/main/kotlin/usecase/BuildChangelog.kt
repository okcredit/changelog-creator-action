package usecase

import kotlinx.coroutines.supervisorScope
import models.Configuration
import models.Inputs
import models.PullRequestInfo
import utils.actions.info

class BuildChangelog(private val inputs: Inputs) {

    suspend operator fun invoke(prs: List<PullRequestInfo>) = supervisorScope {
        val config = inputs.resolveConfiguration()
        println("ℹ️ config categories: ${config.categories?.map { it.labels.joinToString() }?.joinToString(" | ")}")

        // sort to target order
        val sort = config.sort?.ifEmpty { Configuration.DEFAULT_CONFIG.sort } ?: Configuration.DEFAULT_CONFIG.sort
        val sortAsc = sort?.uppercase() == "ASC"
        if (sortAsc) {
            prs.sortedBy { it.mergedAt }
        } else {
            prs.sortedByDescending { it.mergedAt }
        }
        println("ℹ️ Sorted all pull requests ascending: $sort")

        val transformedMap = mutableMapOf<PullRequestInfo, String>()
        // convert PRs to their text representation
        prs.forEach { pr ->
            transformedMap[pr] = fillTemplate(
                pr = pr,
                template = config.pr_template ?: Configuration.DEFAULT_CONFIG.pr_template!!
            )
        }

        println("Wrote messages for ${prs.size} pull requests")

        // bring PRs into the order of categories
        val categorized = mutableMapOf<Configuration.Category, MutableList<String>>()
        val categories: List<Configuration.Category> = config.categories ?: Configuration.DEFAULT_CONFIG.categories!!
        val ignoredLabels: List<String> = config.ignore_labels ?: Configuration.DEFAULT_CONFIG.ignore_labels!!

        categories.forEach {
            categorized[it] = mutableListOf()
        }

        val categorizedPrs = mutableListOf<String>()
        val ignoredPrs = mutableListOf<String>()
        val uncategorizedPrs = mutableListOf<String>()

        // bring elements in order
        transformedMap.forEach { transformedEntry ->
            val pr = transformedEntry.key
            val body = transformedEntry.value
            if (haveCommonElements(ignoredLabels, pr.labels)) {
                ignoredPrs.add(body)
            }

            var matched = false
            categorized.forEach { categorizedEntry ->
                if (haveCommonElements(categorizedEntry.key.labels, pr.labels)) {
                    categorizedEntry.value.add(body)
                    matched = true
                }
            }

            if (!matched) {
                // we allow to have pull requests included in an "uncategorized" category
                for (categorizedEntry in categorized) {
                    if (categorizedEntry.key.labels.isEmpty()) {
                        categorizedEntry.value.add(body)
                        break
                    }
                }
                uncategorizedPrs.add(body)
            } else {
                categorizedPrs.add(body)
            }
        }
        println("ℹ️ Ordered all pull requests into ${categories.joinToString()} categories")

        // construct final changelog
        var changelog = ""
        for (categorizedEntry in categorized) {
            val pullRequests = categorizedEntry.value
            val category = categorizedEntry.key
            if (pullRequests.size > 0) {
                changelog = "${changelog + category.title}\n\n"

                for (pr in pullRequests) {
                    changelog = "${changelog + pr}\n"
                }

                // add space between
                changelog = "${changelog}\n"
            }
        }

        println("Wrote ${categorizedPrs.joinToString()} categorized pull requests down")

        var changelogUncategorized = ""
        for (pr in uncategorizedPrs) {
            changelogUncategorized = "${changelogUncategorized + pr}\n"
        }
        println(
            "Wrote ${uncategorizedPrs.joinToString()} non categorized pull requests down"
        )

        var changelogIgnored = ""
        for (pr in ignoredPrs) {
            changelogIgnored = "${changelogIgnored + pr}\n"
        }
        println("Wrote ${ignoredPrs.size} ignored pull requests down")

        // fill template
        var transformedChangelog = config.template ?: Configuration.DEFAULT_CONFIG.template!!
        transformedChangelog = transformedChangelog.replace("\${{CHANGELOG}}",
            changelog
        )
        transformedChangelog = transformedChangelog.replace("\${{UNCATEGORIZED}}",
            changelogUncategorized
        )
        transformedChangelog = transformedChangelog.replace("\${{IGNORED}}",
            changelogIgnored
        )

        // fill other placeholders
        transformedChangelog = transformedChangelog.replace("\${{CATEGORIZED_COUNT}}",
            categorizedPrs.size.toString()
        )
        transformedChangelog = transformedChangelog.replace("\${{UNCATEGORIZED_COUNT}}",
            uncategorizedPrs.size.toString()
        )
        transformedChangelog = transformedChangelog.replace("\${{IGNORED_COUNT}}", ignoredPrs.size.toString())

        println("ℹ️ Filled template")
        return@supervisorScope transformedChangelog
    }

    private fun haveCommonElements(arr1: List<String>?, arr2: List<String>?): Boolean {
        println("haveCommonElements - ${arr1?.joinToString()} ${arr2?.joinToString()}")
        arr1?.forEach {
            return arr2?.contains(it) ?: false
        }

        return false
    }

    private fun fillTemplate(pr: PullRequestInfo, template: String): String {
        if (template.isBlank()) return ""
        var transformed = template
        transformed = transformed.replace("\${{NUMBER}}", pr.number.toString())
        transformed = transformed.replace("\${{TITLE}}", pr.title)
        transformed = transformed.replace("\${{URL}}", pr.htmlURL)
        transformed = transformed.replace("\${{MERGED_AT}}", pr.mergedAt.toString()
        )
        transformed = transformed.replace("\${{AUTHOR}}", pr.author)
        transformed = transformed.replace("\${{LABELS}}", pr.labels?.joinToString() ?: ""
        )
        transformed = transformed.replace("\${{BODY}}", pr.body)
        transformed = transformed.replace("\${{ASSIGNEES}}",
            pr.assignees?.joinToString() ?: ""
        )
        transformed = transformed.replace("\${{REVIEWERS}}",
            pr.requestedReviewers?.joinToString() ?: ""
        )

        println("transformed $transformed")
        return transformed
    }

}