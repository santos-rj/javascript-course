// no return function

function showSum(a, b) {
    console.log(a + b)
}

showSum(3, 4)
showSum(3)
showSum(3, 4, 5, 6, 7, 8, 9)
showSum()

// return function
function sum(a, b = 0) {
    return a + b
}
console.log(sum(2, 3))
console.log(sum(2))
console.log(sum())