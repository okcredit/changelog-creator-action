package utils

import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import models.Configuration
import path.path
import utils.actions.ActionsEnvironment
import utils.actions.debug
import utils.actions.setFailed
import utils.actions.setOutput
import utils.node_fs.readFile

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

/**
 * Resolves the repository path from actions env variables
 */
fun repositoryPath(): String {
    // this only returns path if we have used action/checkout else empty string
    var githubWorkspacePath = ActionsEnvironment.GITHUB_WORKSPACE
    githubWorkspacePath = path.resolve(githubWorkspacePath)
    debug("GITHUB_WORKSPACE = '${githubWorkspacePath}'")

    val repositoryPath = path.resolve(githubWorkspacePath, ".")
    debug("repositoryPath = '${repositoryPath}'")

    return repositoryPath
}

/**
 * Read the file from configuration path passed and convert to Configuration object.
 * NOTE: Returns default config if there is any error
 */
suspend fun resolveConfiguration(configPath: String): Configuration {
    var configuration = Configuration.DEFAULT_CONFIG
    if (configPath.isEmpty()) {
        return configuration
    }

    val repoPath = repositoryPath()
    val resolvedConfigPath = path.resolve(repoPath, configPath)
    print("config path = $resolvedConfigPath")

    configuration = readJsonFile<Configuration>(resolvedConfigPath) ?: Configuration.DEFAULT_CONFIG
    println(configuration)
    return configuration
}


/**
 * Reads a JSON file and parse it to the type provided
 */
private suspend inline fun <reified T> readJsonFile(filename: String): T? {
    val rawData: String
    try {
        rawData = readFile(filename, "utf8")
    } catch (error: Exception) {
        print("⚠️ Path provided, but it couldn't be found. Fallback to Defaults.")
        return null
    }
    return try {
        Json {
            coerceInputValues = false
            isLenient = true
            ignoreUnknownKeys = true
        }.decodeFromString<T>(rawData)
    } catch (error: Exception) {
        print(
            "⚠️ Path provided, but it couldn't be parsed. Fallback to Defaults."
        )
        null
    }
}