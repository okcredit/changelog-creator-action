import models.Inputs
import utils.actions.*
import utils.failOrError

suspend fun main() {
    // set initial output failed as false
    setOutput("failed", false)

    val inputs = resolveInputs()
    print("$inputs")
    setOutput("owner", inputs.owner)
    setOutput("repo", inputs.repo)
    try {
        val releaseNoteBuilder = ChangelogBuilder(inputs)
        val changelog = releaseNoteBuilder.build()
        setOutput("changelog", changelog)
        print(changelog)
    } catch (ex: Exception) {
        failOrError(ex.message ?: "Error while generating changelog", inputs.failOnError)
    }
}

fun resolveInputs() = group("Reading input values") {
    val tempRepoString = ActionsEnvironment.GITHUB_REPOSITORY.split("/")

    return@group Inputs(
        token = getInput("token").ifEmpty { ActionsEnvironment.GITHUB_TOKEN },
        owner = getInput("owner").ifEmpty { tempRepoString.first() },
        repo = getInput("repo").ifEmpty { tempRepoString[1] },
        providedPath = getInput("path"),
        milestone = getInput("milestone"),
        configPath = getInput("configuration"),
        failOnError = getInput("failOnError").toBoolean(),
    )
}