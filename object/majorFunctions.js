const person = {
    name: "Felipe",
    age: 22,
    weight: 100
}

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
})

Object.defineProperty(person, 'birthDate', {
    enumerable: true,
    writable: false,
    value: '21/06/1997'
})

person.birthDate = '14/03/2000';

console.log(person.birthDate)
console.log(Object.keys(person))

// Object.assign

const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3,a:4}
const obj = Object.assign(dest,o1,o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)