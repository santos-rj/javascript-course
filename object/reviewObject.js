const product = new Object

product.name = 'Cadeira'
product['marca do produto'] = 'Generica'
product.price = 220

console.log(product)

delete product.price
delete product['marca do produto']

console.log(product)

const car = {
    model: 'A4',
    price: 89000,
    owner: {
        name: 'Raul',
        age: 56,
        address: {
            publicPlace: 'Rua ABC',
            number: 123
        }
    },
    conductors: [{
        name: 'Junior',
        age: 19
    }, {
        name: 'Rafael',
        age: 20
    }],
    calculateInsuranceValue: function () {}
}

car.owner.address.number = 1000
car['owner']['address']['publicPlace'] = 'Av Gigante'

console.log(car)

console.log(car)
console.log(car.conductors.length)

delete car.conductors
delete car.owner.address
delete car.calculateInsuranceValue

console.log(car)
console.log(car.conductors)