// using literal notation

const obj1 = {}
console.log(obj1)

// Object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Constructor functions
function Product(name, price, disc) {
    this.name = name
    this.getPriceWithDiscount = () => {
        return price * (1 - disc)
    }
}

const p1 = new Product('Caneta', 7.99, 0.15)
const p2 = new Product('Notebook', 2998.99, 0.25)

console.log(p1.getPriceWithDiscount(), p2.getPriceWithDiscount())

// Factory function
function createEmployee(name, basicSalary, faults) {
    return {
        name,
        basicSalary,
        faults,
        getSalary() {
            return (basicSalary / 30) * (30 - faults)
        }
    }
}

const f1 = createEmployee('João', 7980, 4)
const f2 = createEmployee('Maria', 11400, 1)
console.log(f1.getSalary(), f2.getSalary())

// Object.create
const daughter = Object.create(null)
daughter.name = 'Ana'
console.log(daughter)

// JSON.parse -> returns an object
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON)