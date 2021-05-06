package data

import io.ktor.client.*
import io.ktor.client.features.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import io.ktor.http.*
import data.response.Milestone
import data.response.PullRequest
import data.request.MilestoneRequest

class GithubClient(token: String, private val owner: String,private val repo: String){

    private val client by lazy {
        HttpClient {
            install(JsonFeature)
            defaultRequest {
                host = "api.github.com"
                url {
                    protocol = URLProtocol.HTTPS
                }
                header(HttpHeaders.Authorization, "token $token")
                header(HttpHeaders.Accept, "application/vnd.github.v3+json")
            }
        }
    }

    suspend fun milestones(request: MilestoneRequest): List<Milestone> {
        return client.get {
            url {
                encodedPath = "/repos/$owner/$repo/milestones"
            }
            parameter("state", request.state)
            parameter("direction", request.direction)
            parameter("sort", request.sort)
            parameter("per_page", request.per_page)
            parameter("page", request.page)
        }
    }


    suspend fun pullRequests(request: MilestoneRequest): List<PullRequest> {
        return client.get {
            url {
                encodedPath = "/repos/$owner/$repo/pulls"
            }
            parameter("state", request.state)
            parameter("direction", request.direction)
            parameter("sort", request.sort)
            parameter("per_page", request.per_page)
            parameter("page", request.page)
        }
    }


}