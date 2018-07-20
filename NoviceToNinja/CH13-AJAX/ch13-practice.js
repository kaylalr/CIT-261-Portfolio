const url = 'https:example.com/data'
fetch(url)
.then((response) => {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then( response => console.log('It worked!'))
.catch( error => console.log('There was an error!'))


// REDIRECTS
// WARNING: according to the book, the redirect() method is not supported by ANY browser.
fetch(url)
// redirects to another url
.then( response => response.redirect(newURL))
.then( /* do something else */)
.catch( error => console.log('There was an error: ', error));


// TEXT RESPONSES
fetch(url)
.then( response => response.test() ) // transforms the text stream into a JavaScript string
.then( text => console.log(text) )
.catch( error => console.log('There was an error: ', error))


// FILE RESPONSES
fetch(url)
.then( response => response.blob() ) //transforms the data into a blob object
.then( blob => console.log(blob.type) )
.catch( error => console.log('There was an error: ', error))


//JSON RESPONSES
fetch(url)
.then( response => response.json() ) //transforms the JSON data into a JavaScript object
.then( data => console.log(Object.entries(data)) )
.catch( error => console.log('There was an error: ', error))

// using constructor function to create new Request object
const request = new Request('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
});
fetch(request)
.then( /* do something here*/ )
.catch( /* handle any errors */ )
// OR you can do it this way, by putting the url directly into the fetch()
fetch('https://example.com/data', {
    method: 'GET',
    mode: 'cors',
    redirect: 'follow',
    cache: 'no-cache'
})
.then( /* do something here*/ )
.catch( /* handle any errors */ )


// HEADERS INTERFACE
// basic constructor
//const headers = new Headers();
// more complex constructor with an optional argument containing any initial header values
const headers1 = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset': 'utf-8'})
// the .has() can be used to check if the headers object containts something
console.log(headers1.has('Content-Type'));
// using .get() will return what it is.  In this case, will will show text/plain
console.log(headers1.get("Content-Type"));
// this sets a value of an already existing header
headers1.set('Content-Type', 'application/json');
console.log(headers1.get('Content-Type'));
// this adds a new header to the headers object
headers1.append('Accept-Encoding', 'gzip,deflate');
console.log(headers1.get('Accept-Encoding'));
// this removes the header provided as an argument
headers1.delete('Accept-Encoding');
console.log(headers1.has('Accept-Encoding'));
// I don't really know what this is for, but it shows what headers the headers object has
for(const entry of headers1.entries()) {
    console.log(entry);
    }


// PUTTING IT ALL TOGETHER
const url1 = 'https:example.com/data';
const headers = new Headers({ 'Content-Type': 'text/plain', 'Accept-Charset': 'utf-8', 'Accept-Encoding': 'gzip,deflate'})

const request1 = (url1, {
    headers: headers
})

fetch(request1)
.then( function(response) {
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
})
.then( response => console.log('It worked!'))
.catch( error => console.log('There was an error!') )



// create variables
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io.jokes/random';
// add event handler to each button
textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => outputDiv.innerText = text )
    .catch( error => console.log('There was an error:', error))
},false);

















