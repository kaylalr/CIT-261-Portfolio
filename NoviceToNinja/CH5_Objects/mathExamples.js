// This will give you a random number between 1 and 6 like you were rolling a dice.
    dice = {
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

// These are some of the Math objects you can use
console.log(Math.PI);
console.log(Math.SQRT2); // Square root of 2
console.log(Math.SQRT1_2); // Reciprocal of the square root of 2
console.log(Math.E); // Euler's constant
console.log(Math.LN2); // Natrual log of 2
console.log(Math.LN10); // Natural log of 10
console.log(Math.LOG2E); // Log base 2 of Euler's constant
console.log(Math.LOG10E); // Log base 10 of Euler's constant
console.log(Math.abs(3)); // Math.abs will return the absolute value
console.log(Math.abs(-4.6));
console.log(Math.ceil(4.2)); // Will round the number up.  So this will return 5.
console.log(Math.ceil(8));
console.log(Math.ceil(-4.2));
console.log(Math.floor(4.2)); // This will round the number down
console.log(Math.floor(8));
console.log(Math.floor(-4.2));
console.log(Math.round(4.5)); // This will round to the nearest integer
console.log(Math.round(4.499));
console.log(Math.round(-4.2));
console.log(Math.trunc(4.9)); // This will only return the integer part of the number, not the decimal part
console.log(Math.trunc(-4.2));
console.log(Math.exp(1)); // This will raise the number to the power of Euler's constant
console.log(Math.exp(0));
console.log(Math.exp(-3));
console.log(Math.pow(3, 2)); // 3 squared
console.log(Math.pow(27, 1/3)); // Easy way to do cube roots
console.log(Math.sqrt(121)); // Returns positive square root of number
console.log(Math.sqrt(-1)); // Can't do negative numbers
console.log(Math.cbrt(8)); // Returns cube root of number
console.log(Math.cbrt(-1000));
console.log(Math.hypot(3,4)); // Returns th square root of the sum of the suares of the numbers.  So in this example, it returns the square root of 3 squared + 4 squared
console.log(Math.hypot(2,3,6)); // You can use more than two numbers
console.log(Math.log(1)) // Returns log of number
console.log(Math.log2(8)); // Can change log base to 2
console.log(Math.log10(1000000)); // Can change log base to 10
console.log(Math.max(1,2,3)); // Returns the maximum number for the arguments
console.log(Math.max(Math.PI,Math.SQRT2,Math.E));
console.log(Math.min(1,2,3)); // Returns the minimum number
console.log(Math.sin(Math.PI/6)); // Math.sin returns the sine of an angle
console.log(Math.cos(Math.PI/6)); // Math.cos returns the cosine of an angle
console.log(Math.tan(Math.PI/4)); // Math.tan returns tanged of an angle
console.log(Math.asin(1)); // Math.asin returns the arcsine of a number
console.log(Math.acos(0.5)); // Math.acos returns the arccosine of a number
console.log(Math.atan(Math.sqrt(3))); //Math.atan returns the arctangent of a number
// With the h, it is a method for hyperbolic functions.  You can also do the inverses
console.log(Math.sinh(1));
console.log(Math.asinh(1.175));
console.log(Math.cosh(0));
console.log(Math.acosh(1));
console.log(Math.tanh(10));
console.log(Math.random()); // Returns a random number between 0 and 1
console.log(6 * Math.random()); // Returns a random number between 1 and 6
console.log(Math.floor(6 * Math.random())) ; // Math.floor rounds down, so this will return a random number between 0 and 5

const today = new Date(); // Creates a new date.  If you don't supply an argument by putting something in the parethases after Date, then it will default to the current date
console.log(today.toString()); // Prints out the date
const christmas = new Date('2017 12 25');
console.log(christmas.toString());
console.log(christmas.getDay()); // This returns a number that represents the day.  Monday is 1, Tuesday is 2, etc.
console.log(christmas.getDate());  // This displays the day of the month, so 25 in this example
console.log(christmas.getMonth()); // This returns the month.  This will return 11 because it starts at zero, not one
console.log(christmas.getYear());  // This will return the number of years it's been sinse 1900.  So it will return 117.  DON'T USE THIS WAY
console.log(christmas.getFullYear());  // USE THIS WAY.  This will give you the full year.
// There is also hetHours(), getMinutes(), getSeconds(), and getMilliseconds()












