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
        return `Up, up and away!`;
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

// This does the same thing as the beginning of this file, where I assigned Superman to 'name'.  This way seems to take longer though.  I commented it out because I already used the const name earlier.
//const name = Symbol('name');
//const supergirl = { [name]: 'Supergirl' };
//console.log(supergirl[name]);
// This doesn't work with the way I have it set up earlier.
//console.log(supergirl.name);

// This is the same thing as before, but assinging a realName.  I don't need to put 'const' in from of supergirl because we already defined supergirl earlier.
//const realName = Symbol('real name');
//supergirl[realName] = 'Kara Danvers';
//console.log(supergirl[realName]);

const daredevil = { [name]: 'Daredevil', [realName]: 'Matt Murdoch' };

// This way is faster.  It uses dot notation.
console.log(superman.fly());

// This way works too, but it takes longer to type out.
console.log(superman['fly']());

// This checks if there is a superman object that has a property called 'city.'  If it doesn't, it returns false.
console.log('city' in superman);

// 
console.log(superman.city !== undefined);

// This does the same thing as "console.log(superman.fly)" and "console.log(superman['fly'])"
console.log(superman.hasOwnProperty('city'));

console.log(superman.hasOwnProperty('name'));

// This will show you all the properties of an object, in this case, the project is "superman"
for(const key in superman) {
    console.log(key + ": " + superman[key]);
}

// This impliments a check so that only an objects own properties are returned.
for(const key in superman) {
    if(superman.hasOwnProperty(key)){
        console.log(key + ": " + superman[key]);
    }
}

// This will just list what properties are in an object.  It wont list the values or strings in the properties.  This is the longer way, but it lists them differently than the shorter way.
for(const key of Object.keys(superman)) {
    console.log(key);
}
// You can use this to list what properties are assigned to an object
console.log(Object.keys(superman));

// This will list all the values or strings of the properties in an object.  But it won't list what the names of the properties are.
for(const value of Object.values(superman)) {
    console.log(value);
}

// This shows all the keys and their assigned values
for(const [key,value] of Object.entries(superman)) {
    console.log(`${key}: ${value}`);
} 

// This adds a new property and then prints it in the console.
console.log(superman.city = 'Metropolis');
console.log(superman.city);

// ********************  Why do we need the "for(const...)?  Why cant we just do the console.log(...)?
// Because we added the city property to superman, it now shows up when we list all the properties.
for(const key in superman) {
    console.log(key + ": " + superman[key]);
}

// This changed the 'real name' for superman to 'Kal-El'
console.log(superman['real name'] = 'Kal-El');
console.log(superman);

// I just took this out so I could ask my questions about the fly property from before.
// This just deletes the fly property from superman.
//console.log(delete superman.fly);
//console.log(superman);

// This is a nested object.  It is an object that has other objects inside of it.
const jla = {
    superman: { realName: 'Clark Kent'},
    batman: { realName: 'Bruce Wayne'},
    wonderwoman: { realName: 'Diana Prince'},
    flash: { realName: 'Barry Allen'},
    aquaman: { realName: 'Arthur Curry'}
};

// This is how you access nested object using dot notation.
console.log(jla.wonderwoman.realName);

// This is how you can access nested objects using bracket notation.  I prefer to not use this way.
console.log(jla['flash']['realName']);

// Wow!  You can mix notations.  This uses dot notation then bracket notation.  Cool!
console.log(jla.aquaman['realName']);

const thor = {
    name: 'Thor'
};

// cloneThor now has the same properties as thor.  When we print out cloneThor, it gives the same thing as thor.  thor and cloneThor now point to the same place.  So changing one, changes the other.
const cloneThor = thor;

console.log(thor.name);
console.log(cloneThor);

// Because we change cloneThor to 'Clor', it also changed thor to 'Clor' because they are linked together.  
cloneThor.name = 'Clor';
console.log(thor.name);

// So what I did before with thor and cloneThor doesn't work with the following because they are primitive values insead of objects.  Even though we change b to equal 2, and b equals a, it doesn't change the value of a.
const a = 1;
var b = a;
b = 2;
console.log(b);
console.log(a);

// This assignes objects as parameters for a function.
function greet({greeting,name,age}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}
console.log(greet ({ greeting: "What's up dude", age: 10, name: "Bart"}));

// Here, I am assigning default values for some of the parameters.
function greet({greeting='Hello',name,age=18}) {
    return `${greeting}! My name is ${name} and I am ${age} years old.`;
}
// Even though we set default parameters above, they can be overridden.
console.log(greet({name: 'Lisa', age: 8}));