/*
 * Copyright 2020 Vladimir Sitnikov <sitnikov.vladimir@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

plugins {
    kotlin("js") version "1.5.10"
    kotlin("plugin.serialization") version "1.5.0"
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
    api(npm("@actions/core", "1.2.7"))
    implementation("org.jetbrains.kotlinx:kotlinx-datetime:0.2.0")
    implementation( "io.ktor:ktor-client-js:1.5.4")
    implementation( "io.ktor:ktor-client-serialization:1.5.4")
    implementation( "io.ktor:ktor-client-logging-js:1.5.4")
    implementation("org.jetbrains.kotlinx:kotlinx-serialization-json:1.2.0")
    api("org.jetbrains.kotlinx:kotlinx-coroutines-core-js:1.4.3")
    api("org.jetbrains.kotlinx:kotlinx-nodejs:0.0.7")
}