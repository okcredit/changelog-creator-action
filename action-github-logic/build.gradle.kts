
dependencies {
    api(npm("@js-joda/core", "1.11.0"))
    api(npm("@actions/core", "1.2.7"))
    implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.2.0")
    implementation( "io.ktor:ktor-client-js:1.5.4")
    implementation( "io.ktor:ktor-client-serialization:1.5.4")
    implementation( "io.ktor:ktor-client-logging-js:1.5.4")
    api("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.4.3")
    api("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
}
