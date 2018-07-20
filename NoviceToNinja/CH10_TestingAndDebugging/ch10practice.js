// error: unicorn() has not been difined
//unicorn();
// right way: function unicorn();

// error: unicorn has not been difined
//function three() { unicorn(); }
//function two() { three(); }
//function one() { two(); }
//one();

// error: pi is undefined
//pi = 3.142;
// right way: let pi = 3.142;

// JavaScript is natually a sloppy language.  When you put 'use script' then it usses a strict mode.  This makes it so you have to write better code becuase it checks for errors more strictly.
//'use strict';

// error: e is not difined
//e = 2.718;
// right way: let e = 2.718;

// this works, but only the code inside of the strictly function would use the 'use strict'
//function strictly(){
//    'use strict';
//    // function code goes here
//}
// better way:
//(function() {
//    'use strict';
//    // All your code would to inside of this function.
//}());

// this checks a browers support features before using the method.
//if (window.holoDeck) {
//    virtualReality.activate();
//}


//function amIOldEnough(age){
//    age = document.getElementById("age");
//    // with on one '=' sign, it assigns the variable to that thing.  So this is   always assiging age to 12 no matter what is put in
//    //if (age = 12) {
//    // you would want to do it this way, in this case
//    alert(age);
//    if (age < 12) {
//        // use alerts to help you know what is wrong.
//        console.log('No, sorry.');
//    } else if (age < 18) {
//        console.log('Only if you are accompanied by an adult.');
//    } else {
//        console.log("Yep, come on in!");
//    }
//}

//function amIOldEnough(age) {
//    debugger;
//    if (age < 12) {
//        debugger;
//        console.log('No, sorry.');
//    } else if (age < 18) {
//        debugger;
//        console.log('Only if you are accompanied by an adult.');
//    } else {
//        debugger;
//        console.log('Yep, come on in!');
//    }
//    return age;
//}
















