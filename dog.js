let chalk = require('chalk')

module.exports = class Dog {
    constructor(name) {
        this.name = name;
        this.stomach = [];
    }

    eat(cat) {
        this.stomach.push(cat);
    }

    say() {
        console.log(`I'm ${chalk.red(this.name)}`);
    }
}
