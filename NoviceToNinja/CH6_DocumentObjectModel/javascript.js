const body = document.body;
console.log(typeof body);
console.log(body.nodeType);
console.log(body.nodeName);
const h1 = document.getElementById('title');

// get elements by their tag name
const listItems = document.getElementsByTagName('li');
console.log(listItems[0]);
console.log(listItems[1]);
console.log(listItems[2]);

// get elements by their class name
const heros = document.getElementsByClassName('hero');
console.log(heros.length);
console.log(document.getElementsByClassName('villain').length);
console.log(document.querySelector('#bats'));

// this can be used instead of "document.getElementsByClassName"
console.log(document.querySelectorAll('.hero'));

// this will return the last list item in the document
const wonderWoman = document.querySelector('li:last-child');

const ul = document.querySelector('ul#roster');
// the querySelector() can be called on any element, not just document
const batman = ul.querySelector('li#bats');

const heroes = document.getElementById('roster');
console.log(heroes.childNodes);
console.log(heroes.children);
console.log(heroes.children.length);
console.log(heroes.firstChild);  // this will return '#text' becuase of the white space between <ul> and <li>

console.log(wonderWoman.nextSibling);  // this will return '#text' becuase of the white space between <ul> and <li>
console.log(wonderWoman.previousSibling);  // this will return '#text' becuase of the white space between <ul> and <li>

const textNode = wonderWoman.firstChild;
console.log(textNode); // this will actually tell you the 'firstChild' instead of saying '#text' because of the white space
console.log(textNode.nodeValue); // this will return Wonder Woman without quotes around it like the console.log before this.
console.log(wonderWoman.textContent); // this will do the same thing as before.  but we didn't need the 'const textNode = ...' This will find the value and return the text ontent of the element as a string
console.log(wonderWoman.getAttribute('class'));  // this will print out the value of the attribute privided, in this case, the class attribute.
console.log(wonderWoman.getAttribute('src'));  // if an element doesn't have the attribute specified, it will return, or print out, null
wonderWoman.setAttribute('class', 'villain');  // this is setting the attribute, 'class', to be 'villain' now insead of hero.
console.log(wonderWoman.getAttribute('class'));  // now when I print out the class attribute it prints out as villain, not hero like before.
wonderWoman.setAttribute('id','amazon');  // if an element does not have a specific attribute, you can still set that attribute to something using this method.
console.log(wonderWoman.getAttribute('id'));  // now wonderWoman has an 'id' attribute and it's set to 'amazon'
console.log(wonderWoman.id);  // this is just using dot notation
console.log(wonderWoman.className);
console.log(wonderWoman.className = 'hero'); // this is changing the class attribute back to hero because we changed it to villain earlier.
wonderWoman.classList.add('warrior');  // this added the word 'warrior' onto the end of the className.
console.log(wonderWoman.className);
// console.log(wonderWoman.classList.remove('warrior')); this doesn't work... I think you have to do it seperately
wonderWoman.classList.remove('warrior');  // this removed the 'warrior' from the class name
console.log(wonderWoman.className);
console.log(wonderWoman.classList.contains('hero'));  // checks if the classList has hero.  returns true because it does.
console.log(wonderWoman.classList.contains('villain'));  // checks if the classList has hero.  returns false because it does not.

const flash = document.createElement('li');  // this is creating a new list element, but it is currently empty
flash.textContent = 'Flash';
heroes.appendChild(flash);  // now Flash will appear on the screen along with the three other superheroes in the list.

// This changes the page to show Suicide Squad instead of Justice League and replaces everything in the list.
//h1.innerHTML = 'Suicide Squad';
//heroes.innerHTML = '<li>Harley Quinn</li><li>Deadshot</li><li>Killer Croc</li><li>Enchantress</li><li>Captain Boomerang</li><li>Slipknot</li>'

const superman = heroes.children[0];
superman.style.border = "red 2px solid";  // added a red border around the list item 'superman'
superman.style.backgroundColor = 'aqua';  // changed the background color for superman to aqua





























