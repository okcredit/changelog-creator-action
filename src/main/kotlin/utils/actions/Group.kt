package utils.actions

inline fun<T> group(name: String, action: () -> T): T {
    startGroup(name)
    try {
        return action()
    } finally {
        endGroup()
    }
}
