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
        return 'Up, up and away!';
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

// This doesn't work
//console.logn(supergirl.name);

// This is the same thing as before, but assinging a realName.  I don't need to put 'const' in from of supergirl because we already defined supergirl earlier.
//const realName = Symbol('real name');
//supergirl[realName] = 'Kara Danvers';
//console.log(supergirl[realName]);

const daredevil = { [name]: 'Daredevil', [realName]: 'Matt Murdoch' };

// ***************** ask why this prints out what is does in the console
// This way is faster.  It uses dot notation.
console.log(superman.fly);

// THis way works too, but it takes longer to type out.
console.log(superman['fly']);

// This checks if there is a superman object that has a property called 'city.'  If it doesn't, it returns false.
console.log('city' in superman);

// ****************** ask about this?
//superman.city !== undefined;

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

// This will just list what properties are in an object.  It wont list the values or strings in the properties.
for(const key of Object.keys(superman)) {
    console.log(key);
}

// This will list all the values or strings of the properties in an object.  But it won't list what the names of the properties are.
for(const value of Object.values(superman)) {
    console.log(value);
}

// ******************** This isn't working.  I don't really know what it's supposed to do.
/*for(const [key,value] of Object.entries(superman)) {
    console.log('${key}: ${value}');
} */

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

// ***************  I just took this out so I could ask my questions about the fly property from before.
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
}

// *****************  I took this out because it wasn't working.  I don't know why.
// This is how you access nested object using dot notation.
//console.log(jla.wonderWoman.realName);

// This is how you can access nested objects using bracket notation.  I prefer to not use this way.
console.log(jla['flash']['realName']);

// Wow!  You can mix notations.  This uses dot notation then bracket notation.  Cool!
console.log(jla.aquaman['realName']);