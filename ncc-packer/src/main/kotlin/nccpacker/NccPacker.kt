package nccpacker

import fs.MakeDirectoryOptions
import fs.`T$45`
import fs.mkdirSync
import fs.writeFileSync
import kotlinext.js.jsObject
import kotlinx.coroutines.await
import path.path
import process

suspend fun main() {
    runCatching {
        val (input, output) = process.argv.filterIndexed { i, _ -> i > 1 }
        val result = ncc(input, jsObject {
            sourceMap = true
            license = "LICENSES"
        }).await()

        mkdirSync(output, jsObject<MakeDirectoryOptions> {
            recursive = true
        })
        writeFileSync(path.join(output, "index.js"), result.code, jsObject<`T$45`>())
        result.map?.also { writeFileSync(path.join(output, "index.js.map"), it, jsObject<`T$45`>()) }

        result.assets?.forEach { (assetFileName, asset) ->
            val assetFilePath = path.join(output, assetFileName)
            mkdirSync(path.dirname(assetFilePath), jsObject<MakeDirectoryOptions> {
                recursive = true
            })
            writeFileSync(assetFilePath, asset.source, jsObject<`T$45`> {
                mode = asset.permissions
            })
        }
    }.onFailure {
        console.error(it)
        process.exit(1)
    }
}
