type ReturnObj = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): ReturnObj {
    let num = init
    return {
        increment: () => {
            num = num + 1
            return num
        },
        decrement: () => {
            num = num - 1
            return num
        },
        reset: () => {
            num = init
            return num
        }
    }
};
