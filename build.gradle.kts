plugins {
    kotlin("js") version "1.5.10"
    kotlin("plugin.serialization") version "1.5.10"
}

repositories {
    mavenCentral()
    jcenter()
}


kotlin {
    js(IR) {
        binaries.executable()
        useCommonJs()
        nodejs {

        }
    }
}

tasks.register<Copy>("CopyGeneratedJSToDistribution") {
    dependsOn("CopyGeneratedNodeModuleToRoot")
    from("${buildDir}/compileSync/main/productionExecutable/kotlin/milestone-changelog-creator.js") {
        rename("milestone-changelog-creator", "index")
    }
    into("$rootDir/dist")
}

tasks.register<Copy>("CopyGeneratedNodeModuleToRoot") {
    from("${buildDir}/js/node_modules") {
        exclude("**/.bin")
    }
    into("$rootDir/node_modules")
}

tasks.named("assemble") {
    finalizedBy("CopyGeneratedNodeModuleToRoot")
}

tasks.named("CopyGeneratedNodeModuleToRoot") {
    finalizedBy("CopyGeneratedJSToDistribution")
}

tasks.named("CopyGeneratedJSToDistribution") {
    finalizedBy(project(":ncc-packer").tasks.named("run"))
}

dependencies {
    implementation(npm("@actions/core", "1.4.0"))
    implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.2.1")
    implementation( "io.ktor:ktor-client-js:1.5.4")
    implementation( "io.ktor:ktor-client-serialization:1.5.4")
    implementation( "io.ktor:ktor-client-logging-js:1.5.4")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.2.1")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.4.3")
    implementation("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
}