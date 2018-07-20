function square(x) {
    console.log(`${x}*${x}`);
    let answer = x*x;
    console.log(answer);
}
// using .length can tell you how many variables the thing can accept
console.log(square.length);

function sayHello(){
    console.log(`Hello, my name is ${this.name}`);
}
const clark = {name: 'Clark'};
const bruce = {name: 'Bruce'};
// using .call can be used to set the value of 'this' inside a function
sayHello.call(clark);
sayHello.call(bruce);

function sayHelloAgain(greeting){
    console.log(`${greeting}, my name is ${this.name}`);
}
// the first arguemtn you pass in needs to be the one where you use 'this.'
sayHelloAgain.call(clark, 'How do you do');

// if a function doesn't use a 'this', then you can still use 'call()' but you need to pass in a null first in place of where the 'this' argument would be.
square.call(null, 4);
// 'apply()' works the same way as 'call()', but the arguments you pass in are in an array, even if there is only one.
square.apply(null, [4]);
// you can also add descriptions to objects
square.description = 'Squares a number that is provided as an argument';
console.log(square.description);

// this is using the cashe function.  This helps when is takes some time to compute and then return the value.  We don't really need it for this function, but it's just for practice
function square1(x){
    square1.cashe = square1.cashe || {};
    if (!square1.cashe[x]) {
        let answer = x*x;
        square1.cashe[x] = answer;
    }
    console.log(square1.cashe[x]);
}
square1(3);
square1(-11);
// this will return both of the answers becuase we used 'cashe'
console.log(square1.cashe);

// this is an Immediately Invoked Function Expression (IIFE, pronounced 'iffy').  It is an anynymous function that is invoked as soon as it is defined.  You don't need to call it.
(function(){
    const temp = 'World';
    console.log(`Hello ${temp}`);
})();