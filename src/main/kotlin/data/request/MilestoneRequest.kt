package data.request

data class MilestoneRequest(
    val state: String = "all",
    val direction: String = "desc",
    val sort: String = "completeness",
    val per_page: Int = DEFAULT_PAGE_SIZE,
    val page: Int = 1,
) {
    companion object {
        const val DEFAULT_PAGE_SIZE = 50
    }
}
