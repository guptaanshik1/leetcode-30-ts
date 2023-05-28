function createCounter(n: number): () => number {
    let num = n - 1
    return function() {
        num = num + 1
        return num
    }
}
