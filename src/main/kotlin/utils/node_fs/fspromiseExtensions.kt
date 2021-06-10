package utils.node_fs

import kotlinx.coroutines.await

suspend fun unlink(paths: String) =
    unlinkAsync(paths).await()

suspend fun readFile(path: String, encoding: String = "utf-8") =
    readFileAsync(path, encoding).await()

suspend fun writeFile(path: String, data: Any, encoding: String = "utf-8") =
    writeFileAsync(path, data, encoding).await()

suspend fun rename(oldPath: String, newPath: String) =
    renameAsync(oldPath, newPath).await()

suspend fun mkdir(path: String) =
    mkdirAsync(path).await()

suspend fun chmod(path: String, mode: Number) =
    chmodAsync(path, mode).await()

suspend fun chmod(path: String, mode: String) =
    chmodAsync(path, mode).await()
