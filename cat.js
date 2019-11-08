let Mouse = require('./Mouse');

module.exports = class Cat {
    constructor(name) {
        this.name = name;
        this.stomach = [];
    }

    say() {
        console.log('Meow Meow!');
    }

    eat(animal) {
        if (animal instanceof Mouse)
            this.stomach.push(animal);
        else
            throw new Error('Cat only eat mouse!');
    }
}