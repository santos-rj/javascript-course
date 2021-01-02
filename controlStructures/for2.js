const values = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in values) {
    console.log(i, values[i])
}

const person = {
    firstName: 'Rafael',
    lastName: 'Santos',
    age: 20,
    weight: 100
}

for (let atribute in person) {
    console.log(`${atribute} = ${person[atribute]}`)
}