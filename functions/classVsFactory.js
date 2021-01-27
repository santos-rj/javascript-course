class Person{
    constructor(name){
        this.name = name
    }

    talk(){
        console.log(`My name is ${this.name}`)
    }
}

const p1 = new Person('Rafael')
p1.talk()

const createPerson = name => {
    return {
        talk: () => console.log(`My name is ${name}`)
    }
}

const p2 = createPerson('Rafael')
p2.talk()