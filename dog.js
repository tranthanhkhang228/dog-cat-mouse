class Dog{
    constructor(stomach){
        this.stomach = stomach;
    }

    eat(cat){
        this.stomach.push(cat);
    }
}

module.exports = Dog;