'use strict';

// Selectors.
const inputBox = document.getElementById( 'input-box' );
const button = document.querySelector( 'button' );
const list = document.getElementById( 'list-container' );

// Save the list to local storage.
function saveList(){
    localStorage.setItem( 'toDoList', list.innerHTML);
}

// Show the list from local storage.
function showList(){
    const savedList = localStorage.getItem( 'toDoList' );

	// Check if we have a saved list.
	if( savedList ){
        list.innerHTML = savedList;
    }
}

// Add items to list.
function addItemsToList() {
	// Check if we have a value.
	if( ! inputBox.value ) { 
		alert( 'Please enter a value.' );
		return;
	}

	// Create the list item and delete button.
	const listItem = document.createElement( 'li' );
	const deleteButton = document.createElement( 'span' );

	// Populate data to the list item and delete button.
	listItem.textContent = inputBox.value;
	deleteButton.textContent = 'X';

	// Append the list item and delete button.
	list.appendChild( listItem );
	listItem.appendChild( deleteButton );

	// Reset the input box.
	inputBox.value = '';

	// Save the list to local storage.
	saveList();
}

// Check and Delete items from list.
function checkAndDelete( e ) {
	// Check if the click is on the delete button.
	if ( e.target.tagName === 'SPAN' ) {
		// Delete the list item.
		e.target.parentElement.remove();
	}

	if ( e.target.tagName === 'LI' ) {
		// Toggle the class.
		e.target.classList.toggle( 'checked' );
	}

	// Save the list to local storage.
	saveList();
}

// Event Listeners.
button.addEventListener( 'click', addItemsToList );
inputBox.addEventListener( 'keydown', ( event ) => {
	if ( event.key === 'Enter' ) {
		addItemsToList();
	}
} )
list.addEventListener( 'click', checkAndDelete );
window.addEventListener( 'load', showList );
