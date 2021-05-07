package data

import io.ktor.client.*
import io.ktor.client.features.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import io.ktor.http.*
import data.response.Milestone
import data.response.PullRequest
import data.request.MilestoneRequest
import io.ktor.client.features.logging.*
import utils.actions.info

class GithubClient(token: String, private val owner: String,private val repo: String){

    private val client by lazy {
        HttpClient {
            install(JsonFeature)
            install(Logging){
                logger = CustomerLogger()
                level = LogLevel.ALL
            }
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

    class CustomerLogger : Logger {
        override fun log(message: String) {
            info(message)
        }
    }

    suspend fun milestones(request: MilestoneRequest): List<Milestone> {
        info("milestones MilestoneRequest - $request")
        val response = client.get<List<Milestone>> {
            url {
                encodedPath = "/repos/$owner/$repo/milestones"
            }
            parameter("state", request.state)
            parameter("direction", request.direction)
            parameter("sort", request.sort)
            parameter("per_page", request.per_page)
            parameter("page", request.page)
        }

        info("milestones response - $response")
        return response
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