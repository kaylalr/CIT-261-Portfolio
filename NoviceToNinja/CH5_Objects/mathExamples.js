// This will give you a random number between 1 and 6 like you were rolling a dice.
const dice = {
    sides: 6,
    roll() {
        return Math.floor(this.sides * Math.random()) + 1;
    }
}
// Every time you reload the page it will have a different number
console.log(dice.roll());
console.log(dice.roll());
// Here, I change the number of sides, so the number that shows up in the console can not be between 1 and 20.
console.log(dice.sides = 20);
console.log(dice.roll());
console.log(dice.roll());