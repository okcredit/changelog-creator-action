dependencies {
    api(npm("@vercel/ncc", "0.28.5"))
    api(project(":action-github-logic"))
}
tasks.register<Copy>("CopyGeneratedJSToDistribution") {
    dependsOn("CopyGeneratedNodeModuleToRoot")
    from("${rootDir}/action-entry-point/build/compileSync/main/productionExecutable/kotlin/changelog-creator-action-entry-point.js") {
        rename("changelog-creator-action-entry-point.js", "index.js")
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
