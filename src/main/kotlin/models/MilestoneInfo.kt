package models

import kotlinx.datetime.Instant
import kotlin.js.Date
import kotlin.time.Duration

data class MilestoneInfo(
    val number: Int, // unique identifier for this milestone
    val title: String, // title of this milestone
    val created_at: Instant?, // time when this milestone was created
    val updated_at: Instant?, // time when this milestone was updated
    val closedPRs: Int, // number of closed PRs in this milestone
    val closedAt: Instant?, // time when this milestone was closed
)