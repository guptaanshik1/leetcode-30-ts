type Fn = (...params: any) => any

function memoize(fn: Fn): Fn {
    let cache = {}
    return function(...args) {
        const key = JSON.stringify(args) // result of every call
        if (key in cache) {
            return cache[key]
        } else {
            cache[key] = fn(...args)
            return cache[key]
        }
    }
}
