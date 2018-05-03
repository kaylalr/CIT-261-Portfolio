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