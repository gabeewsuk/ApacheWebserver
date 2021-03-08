/*const person = {

    name:  "Jonh Doe",
    age: 30
}

module.exports = person;
*/

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    greeting() {
        console.log(
            `Hello my name is ${this.name}`)
    }
}

module.exports = Person;