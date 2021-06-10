package utils.actions

class ActionFailedException(override val message: String, cause: Throwable?): Throwable(message, cause) {
    constructor(message: String): this(message, null)
}