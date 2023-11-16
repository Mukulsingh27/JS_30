"use strict";

// Endpoint.
const API =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

// Initialize.
const cities = [];

// fetch the data from the API.
fetch( API )
	.then( response => {
		if( response.status === 200 ) {
			return response.json();
		}
	} )
	.then( data => {
		cities.push( ...data );
	} )
	.catch( error => {
		console.log( error );
	}
);

// Find matches.
function findMatches( wordToMatch, cities ) {
	return cities.filter( ( place ) => {
		const regex = new RegExp( wordToMatch, 'gi' );
		return place?.city.match(regex) || place?.state.match(regex);
	});
}

// Add commas to population.
function numberWithCommas( population ) {
	return population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Display matches.
function displayMatches() {
	// Bail, if no value.
	if( this.value === '' ) {
		suggestions.innerHTML = '';
		return;
	}

	const matches = findMatches( this.value, cities );
	const result = matches
		.map( place => {
			const regex = new RegExp( this.value, 'gi' );
			const cityName = place?.city.replace(
				regex,
				`<span class="highlight">${this.value}</span>`
			);
			const stateName = place?.state.replace(
				regex,
				`<span class="highlight">${this.value}</span>`
			);
			return `
				<li>
					<span class="name">${cityName}, ${stateName}</span>
					<span class="population">${numberWithCommas(place?.population)}</span>
				</li>
			`;
		} )
		.join('');
	suggestions.innerHTML = result;
}

// Selectors.
const searchInput = document.getElementById("search");
const suggestions = document.querySelector(".suggestions");

// Event listeners.
searchInput.addEventListener( 'change', displayMatches );
searchInput.addEventListener( 'keyup', displayMatches );
