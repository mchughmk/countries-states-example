const BASE_URL = 'https://xc-countries-api.herokuapp.com/api';

async function populateCountries() {
    try {
        let response = await fetch(`${BASE_URL}/countries/`);
        let countries = await response.json();

        let countryDropdown = document.getElementById("country");
        populateDropdown(countryDropdown, countries, " -- Select a Country -- ");

    } catch (ex) {
        console.log(`Error getting countries: ${ex.message}`);
    }
}

async function populateStates(countryCode) {
    try {
        let response = await fetch(`${BASE_URL}/countries/${countryCode}/states/`);
        let states = await response.json();

        let stateDropdown = document.getElementById("state");
        populateDropdown(stateDropdown, states, " -- Select a State -- ");

    } catch (ex) {
        console.log(`Error getting states: ${ex.message}`);
    }
}

function populateDropdown(dropdownElement, items, defaultText) {
    dropdownElement.innerHTML = `<option disabled selected value>${defaultText}</option>`;
    items.forEach(item => {
        dropdownElement.innerHTML += `<option value=${item.code}>${item.name}</option>`;
    });
}