plugins {
    kotlin("js")
}


kotlin {
    js(LEGACY) {
        useCommonJs()
        binaries.executable()
        nodejs {
            runTask {
                val path = rootProject.layout.projectDirectory.dir("dist")
                args(
                    path, // input
                    path.asFile.absolutePath // output
                )
            }
        }
    }
}


repositories {
    mavenCentral()
    jcenter()
}

dependencies {
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core:1.5.0")
    implementation("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
    implementation("org.jetbrains.kotlin-wrappers:kotlin-extensions:1.0.1-pre.208-kotlin-1.5.10")
    implementation(npm("@vercel/ncc","0.28.6", generateExternals = false))
}


val TaskContainer.compileKotlinJs
    get() = named<org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile>("compileKotlinJs")

