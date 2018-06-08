// This is getting the first form.
//const form = document.forms[0];
// That is the same as doing it this way:
//const form = document.getElementsByTagname('form)[0];
// You can also do it this way.  But if the forms have the same names, it causes problems.
//const form = document.form.search;
const form = document.forms['search'];
form.addEventListener ('submit', search, false);

function search (event) {
    alert(`You Searched for: ${input.value}`);
    // This stops the form from being submitted
    event.preventDefault();
}

//const [input,button] = form.elements;
// Same thing as above
const input = form.searchInput;
input.value = 'Search Here';
input.addEventListener('focus', function(){
    if (input.value === 'Search Here') {
        input.value = '';
    }
}, false);

input.addEventListener('blur', function(){
    if(input.value === '') {
        input.value = 'Search Here';
    }
},false);

input.addEventListener('change', () => console.log('changed'),false);




// HERO PRACTICE

const formHero = document.forms['hero'];
formHero.addEventListener('submit', makeHero, false)

function makeHero(event) {
    event.preventDefault(); //prevent form from being submitted
    const hero = {}; //create empty object
    hero.name = formHero.heroName.value; //create name property based on the input field's vlaue
    alert(JSON.stringify(hero)); //convert object to JSON string and display in alert dialog
    console.log(hero.name);
    hero.realName = formHero.realName.value;
    console.log(JSON.stringify((hero.realName)));
    hero.powers = [];
    for (let i=0; i < form.powers.lenght; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.posers[i].value);
        }
    }
    return hero;
}