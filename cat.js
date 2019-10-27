module.exports = class Cat {
    constructor(name) {
        this.name = name;
        this.stomach = [];
    }

    say() {
        console.log('Meow Meow!');
    }

    eat(mouse) {
        this.stomach.push(mouse);
    }
}