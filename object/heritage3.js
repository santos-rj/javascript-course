const father = {
    name: 'Felipe',
    colorHair: 'black'
}

const son1 = Object.create(father)
son1.name = 'Maria'
console.log(son1.colorHair)

const son2 = Object.create(father, {
    name: {
        value: 'Joana',
        writable: false,
        enumerable: true
    }
})

console.log(son2.name)
son2.name = 'Graça'
console.log(`${son2.name} has hair ${son2.colorHair}`)

console.log(Object.keys(son1))
console.log(Object.keys(son2))

for (let key in son2) {
    son2.hasOwnProperty(key) ? console.log(key) : console.log(`By heritage: ${key}`)
}