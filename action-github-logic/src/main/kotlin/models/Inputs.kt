package models

import path.path
import utils.actions.debug
import utils.node_fs.readFile
import utils.repositoryPath

data class Inputs(
    val token: String,
    val owner: String,
    val repo: String,
    val providedPath: String,
    val milestone: String?,
    val configPath: String,
    val failOnError: Boolean,
) {

    suspend fun resolveConfiguration(): Configuration {
        var configuration = Configuration.DEFAULT_CONFIG
        if (configPath.isEmpty()) {
            return configuration
        }

        val repoPath = repositoryPath(providedPath)
        val resolvedConfigPath = path.resolve(repoPath, configPath)
        debug("config path = $resolvedConfigPath")

        configuration = readJsonFile(resolvedConfigPath) ?: Configuration.DEFAULT_CONFIG
        return configuration
    }

    private suspend fun readJsonFile(filename: String): Configuration? {
        val rawData: String
        try {
            rawData = readFile(filename, "utf8")
        } catch (error: Exception) {
            print("⚠️ Configuration provided, but it couldn't be found. Fallback to Defaults.")
            return null
        }
        return try {
            JSON.parse<Configuration>(rawData)
        } catch (error: Exception) {
            print(
                "⚠️ Configuration provided, but it couldn't be parsed. Fallback to Defaults."
            )
            null
        }
    }
}
