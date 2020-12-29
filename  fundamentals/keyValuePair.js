// key/value pair

const salutation = 'Hi!' // Context lexicon

function exec() {
    const salutation = "I'm fine"
    return salutation
}

// Objects are nested groups of key value pairs

const client = {
    name: 'Rafael',
    age: 20,
    weight: 100,
    address: {
        street: 'Rua da Riqueza',
        number: 1
    }
}

console.log(salutation)
console.log(exec())
console.log(client)