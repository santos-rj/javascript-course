const person = {
    salutation: 'Good morning!',
    talk() {
        console.log(this.salutation)
    }
}

person.talk()
const talk = person.talk
talk() // Conflicts between paradigms: functional and OO

const talkOfPerson = person.talk.bind(person) // Bind is responsible for setting a standard method when calling a function
talkOfPerson()