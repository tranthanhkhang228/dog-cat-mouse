let Mouse = require('./Mouse');
let Cat = require('./Cat');
let Dog = require('./Dog');

let jerry = new Mouse('jerry');
let tom = new Cat('tom');
let jack = new Dog('jack');

try {
    tom.eat(jack);
} catch (error) {
    console.log('Error while eating!');
}

console.log(tom);