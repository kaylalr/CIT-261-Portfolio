function doSomething () {
    console.log('Something Happened!');
}
function clickMe () {
    console.log('You Clicked Me!');
}
// This happens when someone just clicked on the page.  Not a specific spot on the page.
document.onclick = function () {
    console.log('You clicked on the page!');
}
// This adds an event listener, in this case, it's when someone clicks on the page.
document.body.addEventListener('click', doSomething);
// This is making the event listener a global object.  Before, it was only on the body of the document.
//addEventListener('click', () => alert('You Clicked!'));
// This will tell you the event type of that thing.  In this case, it would return click, because you clicked on it.
function doSomething(event) {
    console.log(event.type);
    // This will tell you what you clicked on to make the event happen.
    console.log(event.target);
    // This will find the position of where the mouse event occured.  ScreenX/ScreenY shows the number of pixels from the left and top of the screen respectively.  ClientX/ClientY shows the number of pixels from the left and top of the client being used (usually the browser window).  PageX/PageY shows the number of pixels from the left and top of where the event took place in the document.  This takes account of whether the page has been scrolled.
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`);
}



// Mouse Events


const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

function highlight(event) {
    event.target.classList.toggle('highlight');
}
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

const mouseParagraph = document.getElementById('mouse');
// When the mouse is over, the paragraph is highlighted and it toggles the highlight on.
mouseParagraph.addEventListener('mouseover', highlight);
// When the mouse goes outside the box, it toggles the highlight again, but this time to off.
mouseParagraph.addEventListener('mouseout', highlight);
// This will say 'You Moved!' every time your mouse moves while you're inside of the mouseParagraph.
//mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!'));

// Keyboard Events


addEventListener('keydown', highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
// This will tell you what key you pressed.  Shift, Ctrl, and Alt won't fire the keypress because they don't produce a character on the screen.  You can change 'keypress' to 'keydown' and then all keys will work.
addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));
addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
        console.log('Action canceled!');
    }
});



// Removing Event Listeners


const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
// This function removes the event once it has done it once.
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}