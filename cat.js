class Cat{
    constructor(stomach){
        this.stomach = stomach;
    }

    say(){
        console.log('Meow Meow!');
    }

    eat(mouse) {
        this.stomach.push(mouse);
    }
}

module.exports = Cat;