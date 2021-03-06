package data

import data.request.MilestoneRequest
import data.response.Milestone
import data.response.PullRequest
import io.ktor.client.*
import io.ktor.client.features.*
import io.ktor.client.features.json.*
import io.ktor.client.features.json.serializer.*
import io.ktor.client.request.*
import io.ktor.http.*

/**
 * Central client to make all the API calls to Github.
 */
class GithubClient(private val token: String, private val owner: String, private val repo: String) {

    private val client by lazy {
        HttpClient {
            install(JsonFeature) {
                serializer = KotlinxSerializer(json = kotlinx.serialization.json.Json {
                    ignoreUnknownKeys = true
                    coerceInputValues = false
                    isLenient = true
                })
            }
            HttpResponseValidator {
                validateResponse {
                    when (it.status) {
                        HttpStatusCode.BadRequest -> error("Bad request")
                        HttpStatusCode.Unauthorized -> error("Unauthorized utils.actions.error")
                    }

                    if (!it.status.isSuccess()) {
                        error("Bad status: ${it.status}")
                    }
                }
            }
        }
    }

    suspend fun milestones(request: MilestoneRequest): List<Milestone> {
        return client.get {
            apiUrl("/repos/$owner/$repo/milestones")
            parameter("state", request.state)
            parameter("direction", request.direction)
            parameter("sort", request.sort)
            parameter("per_page", request.per_page)
            parameter("page", request.page)
        }
    }


    suspend fun pullRequests(request: MilestoneRequest): List<PullRequest> {
        return client.get {
            apiUrl("/repos/$owner/$repo/pulls")
            parameter("state", request.state)
            parameter("direction", request.direction)
            parameter("sort", request.sort)
            parameter("per_page", request.per_page)
            parameter("page", request.page)
        }
    }

    private fun HttpRequestBuilder.apiUrl(path: String) {
        header(HttpHeaders.Authorization, "token $token")
        header(HttpHeaders.Accept, "application/vnd.github.v3+json")
        header(HttpHeaders.CacheControl, "no-cache")
        url {
            takeFrom("https://api.github.com")
            encodedPath = path
        }
    }


}