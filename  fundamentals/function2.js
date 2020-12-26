// Storing a function in a variable

const showSum = function (a, b) {
    console.log(a + b)
}

showSum(2, 3)

// Storing a function arrow in a variable

const sum = (a, b) => {
    return a + b
}

console.log(sum(2, 3))

// Implicit return

const subtraction = (a, b) => a - b
console.log(subtraction(2, 3))