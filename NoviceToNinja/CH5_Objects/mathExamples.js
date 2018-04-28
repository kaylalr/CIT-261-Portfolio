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

const myMaths = {
    square(x) {
        return x * x;
    },
    mean(array,callback) {
        if (callback) {
            array.map( callback );
        }
        const total = array.reduce((a, b) => a + b);
        return total/array.length;
    }
};
// So the myMaths is the name space and you need that to reference the square function.  Doing it this way allows you to have more than one square function if they have different name spaces.
console.log(myMaths.square(3));
// *****************  Why is this always 2?  What does the "mean(array,callback)" thing mean in the lines above?
console.log(myMaths.mean([1,2,3]));