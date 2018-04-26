const superman = {
    name: 'superman',
// 'real name' is in quotes because it has a space.  In a real-world app, it would be something like real_name or realName
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],
    fly() {
        return 'up, up and away!';
    }
};

// This creates an empty object
const spiderman = {};

// This also creates an empty object, but the other way is faster.  This method is not recommended
//const spiderman = new object();

const name = 'Iron Man';
const realName = 'Tony Stark';

// long way
//const ironMan = { name: name, realName: realName };

// shorter ES6 way - this only works if a property names are the same as the variable name I make
const ironMan = {name, realName};

// Dot notation - I like this way better.  It's faster
console.log(superman.name);

// This way is longer, but dose the same thing as above... I like the other way better.
console.log(superman['name']);

// Bracket notation is the only way to access nonstardard property and metod names.
console.log(superman["real " + "name"]);

// When you try to access a property that doesn't exist, it will return undefined.
console.log(superman.city);

// This is the long way
//const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smach!' };

// This way is shorter, but does the same thing as above
const hulk = { name: 'Hulk', catchPhrase: 'Hulk Smash!' };

console.log(hulk.name);
console.log(hulk.catchPhrase);

const bewitched = true;
const captainBritain = {name: 'Captain Britain', hero: bewitched ? false : true};

console.log(captainBritain);

// This does the same thing as the beginning of this file, where I assigned Superman to 'name'.  This way seems to take longer though
//const name = Symbol('name');
//const supergirl = { [name]: 'Supergirl' };
//console.log(supergirl[name]);

// This doesn't work
//console.logn(supergirl.name);

// This is the same thing as before, but assinging a realName.  I don't need to put 'const' in from of supergirl because we already defined supergirl earlier.
//const realName = Symbol('real name');
//supergirl[realName] = 'Kara Danvers';
//console.log(supergirl[realName]);