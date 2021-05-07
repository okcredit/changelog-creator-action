package utils

import utils.actions.ActionsEnvironment
import utils.actions.debug
import utils.actions.setFailed
import utils.actions.setOutput

/**
 * Will automatically either report the message to the log, or mark the action as failed. Additionally defining the
 * output failed, allowing it to be read in by other actions
 */
fun failOrError(
    message: String,
    failOnError: Boolean
) {
    // if we report any failure, consider the action to have failed, may not make the build fail
    setOutput("failed", true)
    if (failOnError) {
        setFailed(message)
    } else {
        error(message)
    }
}

fun repositoryPath(providedPath: String): String {
    // this only returns path if we have used action/checkout else empty string
    val githubWorkspacePath = ActionsEnvironment.GITHUB_WORKSPACE
    debug("GITHUB_WORKSPACE = '${githubWorkspacePath}'")

    val repositoryPath = githubWorkspacePath + providedPath.ifEmpty { "." }
    debug("repositoryPath = '${repositoryPath}'")

    return repositoryPath
}