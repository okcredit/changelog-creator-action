package nccpacker

import Buffer
import kotlinext.js.Object
import kotlin.js.Promise

@JsModule("@vercel/ncc")
external fun ncc(input: String, options: NccOptions = definedExternally): Promise<NccResult>

external interface NccOptions {
    var cache: dynamic
    var externals: List<String>
    var filterAssetBase: String
    var minify: Boolean
    var sourceMap: Boolean
    var sourceMapBasePrefix: String
    var sourceMapRegister: Boolean
    var license: String
    var v8cache: Boolean
    var quiet: Boolean
    var debugLog: Boolean
    var transpileOnly: Boolean
    var target: String
}

external interface NccResult {
    val code: String
    val map: String?
    val assets: AssetMap?
}

external interface AssetMap

inline operator fun AssetMap.get(key: String) = asDynamic()[key].unsafeCast<Asset>()

inline operator fun AssetMap.set(key: String, value: Asset) {
    asDynamic()[key] = value
}

inline operator fun AssetMap.iterator() = Object.keys(this).map { it to this[it] }.iterator()

inline fun AssetMap.forEach(action: (Pair<String, Asset>) -> Unit) {
    for (element in this) {
        action(element)
    }
}

external interface Asset {
    val source: Buffer
    val permissions: Number?
}
