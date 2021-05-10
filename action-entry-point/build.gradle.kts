
dependencies {
    api(project(":action-github-logic"))
}

tasks.register<Copy>("CopyGeneratedJSToDistribution") {
    val file = File("${rootDir}/dist")
    if(file.exists()) file.deleteRecursively()

    file.mkdir()
    from("${rootDir}/action-entry-point/build/compileSync/main/productionExecutable/kotlin/changelog-creator-action-entry-point.js")
    into("${rootDir}/dist")
}

tasks.register<Copy>("CopyGeneratedNodeModuleToRoot") {
    from("${rootDir}/build/js/node_modules")
    into("$rootDir/node_modules")
}

tasks.named("assemble") {
    finalizedBy("CopyGeneratedNodeModuleToRoot","CopyGeneratedJSToDistribution")
}
