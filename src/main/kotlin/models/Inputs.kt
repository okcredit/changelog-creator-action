package models

data class Inputs(
    val token: String,
    val owner: String,
    val repo: String,
    val providedPath: String,
    val milestone: String?,
    val configPath: String,
    val failOnError: Boolean,
)