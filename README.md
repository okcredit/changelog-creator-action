# Changelog Creator Action
A GitHub action built using `Kotlin/JS` that creates your release notes/changelog using the PRs closed in a milestone

### Tech Stack

This project is written in `Kotlin/JS` to compile as a Javascript Action. `@vercel/ncc` is used to create a single JS file with all dependencies from `node_modules`.

- [@vercel/ncc](https://github.com/vercel/ncc) - Simple CLI for compiling a Node.js module into a single file, together with all its dependencies, gcc-style.
- [@actions/core](https://github.com/actions/toolkit/tree/main/packages/core) - Github toolkit which provides core functions for setting results, logging, registering secrets and exporting variables across actions
- [Ktor](https://ktor.io/) - Perform all the network calls
- [kotlinx.serialization](https://github.com/Kotlin/kotlinx.serialization) - For serialization and deserialization of JSON
- [kotlinx-datetime](https://github.com/Kotlin/kotlinx-datetime) - A multiplatform Kotlin library for working with date and time.

## Setup

### Configure the workflow

Basic Usage:

```yml
- name: "Build Changelog"
  id: build_changelog
  uses: okcredit/changelog-creator-action@{latest-release}
  with:
    milestone: 1.0.0
  env:
    GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

Advanced usage:

```yml
- name: "Build Changelog"
  id: build_changelog
  uses: okcredit/changelog-creator-action@{latest-release}
  with:
    milestone: 1.0.0
    configuration: "configuration.json"
    failOnError: true
    owner: "okcredit"
    repo: "changelog-creator-action"
    token: ${{ secrets.GITHUB_TOKEN }}
```

### Workflow Inputs

A full set list of possible output values for this action.

| **Input**           | **Description**                                                                                                                        |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------- |
| `configuration`     | Defines the relative path to the configuration file. You must add `actions/checkout@v2` step if you are adding your own configuration  |
| `milestone`         | Defines the milestone for which changelog needs to be generated. If not supplied last closed milestone will be used                    |
| `failOnError`       | Defines if the action should result in a build failure, if an error was discovered. Default: `false`                                   |
| `owner`             | Defines the owner of the repo, uses `env.GITHUB_REPOSITORY` to resolve owner name by default                                           |
| `repo`              | Defines the name of the repo, uses `env.GITHUB_REPOSITORY` to resolve repo name by default                                             |
| `token`             | Defines the token to use to execute the git API requests with, uses `env.GITHUB_TOKEN` by default       

💡 All input values are optional. It is only required to provide the `token` either via the input, or as `env` variable.

### Workflow Outputs

| **Output**          | **Description**                                                                                                           |
|---------------------|---------------------------------------------------------------------------------------------------------------------------|
| `outputs.changelog` | The built changelog from merged PRs for milestone                                                                         |
| `outputs.milestone` | Milestone either provided in the input or resolved from the last closed list                                              |
| `outputs.owner`     | Specifies the owner of the repository processed                                                                           |
| `outputs.repo`      | Describes the repository name, which was processed                                                                        |
| `outputs.failed`    | Defines if there was an issue with the action run, and the changelog may not have been generated correctly. [true, false] |

### Configuration

This action supports configuring the changelog output using a configuration file and passing it in as input.
A default configuration is used if not passed as input.

#### Default Configuration -
```json
{
  "categories": [
    {
      "title": "## 🚀 Features",
      "labels": ["feature"]
    },
    {
      "title": "## 🐛 Fixes",
      "labels": ["fix"]
    },
    {
      "title": "## 🧪 Tests",
      "labels": ["test"]
    }
  ],
  "ignore_labels": [
    "ignore"
  ],
  "sort": "DESC",
  "template": "${{CHANGELOG}}\n\n<details>\n<summary>Uncategorized</summary>\n\n${{UNCATEGORIZED}}\n</details>",
  "pr_template": "- ${{TITLE}}\n   - PR: #${{NUMBER}}",
  "empty_template": "- no changes"
}

```
#### PR Template Placeholders

Below are supported placeholders for individual PR messages - 

| **Placeholder**  | **Description**                                             |
|------------------|-------------------------------------------------------------|
| `${{NUMBER}}`    | The number referencing this pull request. E.g. 13           |
| `${{TITLE}}`     | Specified title of the merged pull request                  |
| `${{URL}}`       | Url linking to the pull request on GitHub                   |
| `${{MERGED_AT}}` | The ISO time, the pull request was merged at                |
| `${{AUTHOR}}`    | Author creating and opening the pull request                |
| `${{LABELS}}`    | The labels associated with this pull request, joined by `,` |
| `${{BODY}}`      | Description/Body of the pull request as specified on GitHub |
| `${{ASSIGNEES}}` | Login names of assigned GitHub users, joined by `,`         |
| `${{REVIEWERS}}` | GitHub Login names of specified reviewers, joined by `,`    |

#### Template Placeholders

Following placeholders can be used in `template` or `empty_template` in configuration


| **Placeholder**            | **Description**                                                                                    | **Empty** |
|----------------------------|----------------------------------------------------------------------------------------------------|:---------:|
| `${{CHANGELOG}}`           | The contents of the changelog, matching the labels as specified in the categories configuration    |           |
| `${{UNCATEGORIZED}}`       | All pull requests not matching a specified label in categories                                     |           |
| `${{IGNORED}}`             | All pull requests defining labels matching the `ignore_labels` configuration                       |           |
| `${{OWNER}}`               | Describes the owner of the repository the changelog was generated for                              | x         |
| `${{REPO}}`                | The repository name of the repo the changelog was generated for                                    | x         |
| `${{CATEGORIZED_COUNT}}`   | The count of PRs which were categorized                                                            |           |
| `${{UNCATEGORIZED_COUNT}}` | The count of PRs and changes which were not categorized. No label overlapping with category labels |           |
| `${{IGNORED_COUNT}}`       | The count of PRs and changes which were specifically ignored from the changelog.                   |           |

#### Configuration Specification
Complete list of all the possible options in `configuration.json` 

| **Input**                   | **Description**                                                                                                                                                                                                                    |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| categories                  | An array of `category` specifications, offering a flexible way to group changes into categories                                                                                                                                    |
| category.title              | The display name of a category in the changelog                                                                                                                                                                                    |
| category.labels             | An array of labels, to match pull request labels against. If any PR label matches any category label, the pull request will show up under this category                                                                            |
| ignore_labels               | An array of labels, to match pull request labels against. If any PR label overlaps, the pull request will be ignored from the changelog. This takes precedence over category labels                                                |
| sort                        | The sort order of pull requests. [ASC, DESC]                                                                                                                                                                                       |
| template                    | Specifies the global template to pick for creating the changelog. See [Template placeholders](#template-placeholders) for possible values                                                                                          |
| pr_template                 | Defines the per pull request template. See [PR Template placeholders](#pr-template-placeholders) for possible values                                                                                                               |
| empty_template              | Template to pick if no changes are detected. See [Template placeholders](#template-placeholders) for possible values                                                                                                               |

### Full Samples

- With Create release Github Action-

```yml
on:
  workflow_dispatch:
    inputs:
      milestone:
        description: 'Milestone for release'
        required: false

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Build Changelog
        id: github_release
        uses: okcredit/changelog-creator-action@{latest-release}
        with:
          milestone: ${{ github.event.inputs.milestone }}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
      - name: Create Release
        uses: actions/create-release@v1
        with:
          tag_name: ${{ steps.github_release.outputs.milestone }}
          release_name: ${{ steps.github_release.outputs.milestone }}
          body: ${{steps.github_release.outputs.changelog}}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```


- Trigger from milestone closed
```yml
on:
  milestone:
    type: [closed]
jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2
        with:
          fetch-depth: 0
          
      - name: Build Changelog
        id: github_release
        uses: okcredit/changelog-creator-action@{latest-release}
        with:
          configuration: "configuration.json"
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          
      - name: Print change log
        run: echo "Generated changelog - ${{ steps.github_release.outputs.changelog }}"
      - name: Create Release
        uses: actions/create-release@v1
        with:
          tag_name: ${{ steps.github_release.outputs.milestone }}
          release_name: ${{ steps.github_release.outputs.milestone }}
          body: ${{steps.github_release.outputs.changelog}}
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
### Credits
- Core configuration logic is inspired from [mikepenz/release-changelog-builder-action](https://github.com/mikepenz/release-changelog-builder-action).