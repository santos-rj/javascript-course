function Person(name = 'Rafael') {

    this.name = name

    this.talk = function () {
        return `My name is ${this.name}`
    }
}
const p1 = new Person()
console.log(p1.talk())