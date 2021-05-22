Object.prototype.attr0 = '0'
const grandfather = {
    attr1: 'A'
}
const father = {
    __proto__: grandfather,
    attr2: 'B',
    attr3: '3'
}
const child = {
    __proto__: father,
    attr3: 'C'
}

console.log(child.attr0, child.attr1, child.attr2, child.attr3)

const car = {
    currencyVel: 0,
    maxVel: 200,
    accelerate(delta) {
        if (this.currencyVel + delta <= this.maxVel) {
            this.currencyVel += delta
        } else {
            this.currencyVel = this.maxVel
        }
    },
    status() {
        return `${this.currencyVel}Km/h de ${this.maxVel}Km/h`
    }
}

const ferrari = {
    model: 'F40',
    maxVel: 324
}

const volvo = {
    model: 'V40',
    status() {
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.accelerate(300)
console.log(volvo.status())

ferrari.accelerate(300)
console.log(ferrari.status())