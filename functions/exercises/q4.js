function division(a, b) {
    let result = {
        rest: a % b,
        result: a / b
    }

    return result
}

let result = division(10, 2)

console.log(`Result: ${result.result}; Rest: ${result.rest};`)