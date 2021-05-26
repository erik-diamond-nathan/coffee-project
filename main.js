"use strict"

//REFACTOR THIS INTO DOM FORMAT
function renderCoffee(coffee) {
    var html = document.createElement("div"); // <---REFACTORED DOM
    var name = document.createElement("h1");
    name.innerText = coffee.name;
    var roast = document.createElement("h5");
    roast.innerText = coffee.roast;

    html.appendChild(name);
    html.appendChild(roast);

    return html;
}

function renderCoffees(coffees) {
    var html = [];
    for (var i = 0; i < coffees.length; i++) {
        html.push(renderCoffee(coffees[i]));
    }
    return html;
}


function updateCoffees(e) {
    if (e) e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    console.log(roastSelection);
    var selectedName = nameSelection.value.toUpperCase();
    var filteredCoffees = [];
    coffees.forEach(function (coffee) {
        if (selectedRoast === "all" && coffee.name.toUpperCase().includes(selectedName)) {
            filteredCoffees.push(coffee);
        }
        if (coffee.roast === selectedRoast && coffee.name.toUpperCase().includes(selectedName)) {
            filteredCoffees.push(coffee);
        }
    });
    var coffeeNode = renderCoffees(filteredCoffees);
    tbody.innerHTML = "";
    for (let node of coffeeNode) {
        tbody.appendChild(node);

    }
}


function newCoffee(e) {
    e.preventDefault();
    coffees.push({
        id: coffees.length + 1,
        name: newName.value,
        roast: newRoast.value
    });
    renderCoffee(coffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var nameSelection = document.querySelector('#name-selection');
var newName = document.querySelector('#new-name');
var newRoast = document.querySelector('#new-roast');
var newSubmit = document.querySelector('#new-submit');

// tbody.innerHTML = renderCoffees(coffees);
updateCoffees();

submitButton.addEventListener('click', updateCoffees);
newSubmit.addEventListener('click', newCoffee);
newSubmit.addEventListener('click', updateCoffees);
nameSelection.addEventListener('input', updateCoffees);
roastSelection.addEventListener('change', updateCoffees)