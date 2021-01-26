const sum = function (x, y) {
    return x + y
}

const showResult = function (a, b, operation = sum) {
    console.log(operation(a, b))
}

showResult(3, 4)
showResult(3, 4, sum)
showResult(3, 4, function (x, y) {
    return x - y
})
showResult(3, 4, (x, y) => x * y)

const person = {
    talk: function () {
        console.log('Hi!')
    }
}

person.talk()