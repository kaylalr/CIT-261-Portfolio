// these two functions do the same thing, just in a different way
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()+1);
    }
}
const Dice = function(sides=6){
     this.sides = sides;
     this.roll = function() {
         return Math.floor(this.sides * Math.random()+1);
     }
}

// these both do the same thing.  You don't need the parenthasis in this example
const redDice = new Dice();
const newDice = new Dice;
console.log(redDice);
console.log(newDice);
// the parenthsis are only needed if you are passing in an argument
const whiteDice = new Dice(4);
console.log(whiteDice);

// this will return true because reDice is a Dice.
console.log(redDice instanceof Dice);
// redDice has 6 sides because it inherits the properties of the object we used to create it
console.log(redDice.sides);
console.log(redDice.roll());

// this is doing the same thing as the Dice() function
class Dices {
    constructor(sides=6) {
        this.sides = sides;
    }
    
    roll() {
        return Math.floor(this.sides * Math.random() + 1);
    }
    
    static description() {
        return 'A way of choosing random numbers';
    }
}
// checking that using the Dices() fuction will return the same thing as the Dice() function
const blueDice = new Dices(20);
console.log(blueDice);
console.log(blueDice instanceof Dices);
console.log(blueDice.sides);
console.log(blueDice.roll());

console.log(blueDice.constructor);

// this is making a copy of the redDice
const greenDice = new redDice.constructor(10);
console.log(greenDice instanceof Dice);

console.log(Dices.description);
// this doesn't work because you can't use static methods with instances of the class
console.log(redDice.description);

class Turtle {
    constructor(name) {
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi() {
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return  `Feel the power of my ${this.weapon}`;
    }
}
const leo = new Turtle('Leonardo');
console.log(leo);
console.log(leo.sayHi());