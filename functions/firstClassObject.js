// Function in JS is First-Class Object (Citizens)
// Higher-order function

// Create literally
function func1() {}

// Storage in a variable
const func2 = function () {}

// Storage in an array
const array = [function (a, b) {
    return a + b
}, func1, func2]
console.log(array[0](2, 3))

// Storage in an atribute of object
const obj = {}
obj.talk = function () {
    return 'Opa!'
}
console.log(obj.talk())

// Pass function as parameter
function run(fun) {
    fun()
}
run(function () {
    console.log('Executando...')
})

// A function can contain a function
function sum(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
sum(2, 3)(4)

const result = sum(2,4)
result(5)