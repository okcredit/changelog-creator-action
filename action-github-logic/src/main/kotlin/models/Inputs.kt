package models

import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import path.path
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
        print("config path = $resolvedConfigPath")

        configuration = readJsonFile(resolvedConfigPath) ?: Configuration.DEFAULT_CONFIG
        println(configuration)
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
        println(rawData)
        return try {
            Json{isLenient = true}.decodeFromString<Configuration>(rawData)
        } catch (error: Exception) {
            print(
                "⚠️ Configuration provided, but it couldn't be parsed. Fallback to Defaults."
            )
            null
        }
    }
}
