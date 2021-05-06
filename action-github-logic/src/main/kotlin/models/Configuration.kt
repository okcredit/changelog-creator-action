package models

import kotlinx.serialization.Serializable

@Serializable
data class Configuration(
    val categories: List<Category>?,
    val empty_template: String?, // - no changes
    val ignore_labels: List<String>?,
    val pr_template: String?, // - ${{TITLE}}   - PR: #${{NUMBER}}
    val sort: String?, // ASC, DESC,
    val transformers: List<Transformer>?,
    val template: String?, // ${{CHANGELOG}}<details><summary>Uncategorized</summary>${{UNCATEGORIZED}}</details>
) {
    @Serializable
    data class Category(
        val labels: List<String>,
        val title: String // ## 🚀 Features
    )

    @Serializable
    data class Transformer (
        val pattern: String,
        val target: String,
    )

    companion object {
        val DEFAULT_CONFIG = Configuration(
            categories = listOf(
                Category(title = "## \uD83D\uDE80 Features", labels = listOf("feature")),
                Category(title = "## \uD83D\uDC1B Fixes", labels = listOf("fix")),
                Category(title = "## \uD83E\uDDEA Tests", labels = listOf("test")),
            ),
            empty_template = "- no changes",
            ignore_labels = listOf("ignore"),
            pr_template = "- \${{TITLE}}    - PR: #\${{NUMBER}}",
            sort = "DESC",
            transformers = emptyList(),
            template = "\${{CHANGELOG}}<details><summary>Uncategorized</summary>\${{UNCATEGORIZED}}</details>"
        )
    }
}