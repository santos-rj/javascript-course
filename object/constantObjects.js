const person = {
    name: 'João'
}
person.name = 'Pedro'
console.log(person)

// person = {name = 'Ana'}

Object.freeze(person)

person.name = 'Maria'
person.address = 'Rua ABC'

console.log(person.name)
console.log(person)

const personConstant = Object.freeze({
    name: 'João'
})
personConstant.name = 'Maria'
console.log(personConstant)