const person = {
    name: 'Maria',
    age: 50,
    address: {
        street: 'ABC',
        number: 1000
    }
}

const {
    name,
    age
} = person

console.log(name, age);

const {
    name: n,
    age: a
} = person

console.log(n, a);

const {
    lastName,
    humor = true
} = person
console.log(lastName, humor)

const {
    conta: {
        ag,
        num
    }
} = person
console.log(ag, num)