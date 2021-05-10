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
    kotlin("js") version "1.5.0" apply false
    kotlin("plugin.serialization") version "1.5.0"
}

plugins.withType<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootPlugin> {
    configure<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension> {
        nodeVersion = "12.18.3"
    }
}

subprojects {
    apply(plugin = "org.jetbrains.kotlin.js")
    apply(plugin = "org.jetbrains.kotlin.plugin.serialization")
}

allprojects {
    repositories {
        mavenCentral()
        jcenter {
            content {
                // https://github.com/JetBrains/kotlin-wrappers/issues/279
                includeModule("org.jetbrains", "kotlin-extensions")
                // https://github.com/Kotlin/kotlinx-nodejs/issues/16
                includeModule("org.jetbrains.kotlinx", "kotlinx-nodejs")
            }
        }
    }
    plugins.withId("org.jetbrains.kotlin.js") {
        tasks {
            withType<org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile>().configureEach {
                kotlinOptions {
                    moduleKind = "commonjs"
                }
            }
        }
        configure<org.jetbrains.kotlin.gradle.dsl.KotlinJsProjectExtension> {
            js(IR) {
                nodejs()
                binaries.executable()
            }
        }
    }
}
