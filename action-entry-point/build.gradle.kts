
dependencies {
    api(project(":action-github-logic"))
}

tasks.register<Copy>("CopyGeneratedJSToDistribution") {
    val file = File("${rootDir}/distributions")
    if(!file.exists()) file.mkdir()

    from("${rootDir}/action-entry-point/build/distributions")
    into("${rootDir}/distributions")
}

tasks.named("assemble") {
    finalizedBy("CopyGeneratedJSToDistribution")
}
