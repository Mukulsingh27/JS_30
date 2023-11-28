"use strict";

// Set Random Color.
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// Set Background Color.
function setBackground() {
    const randomColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    return randomColor;
}

// Reset the tiles at once.
function resetTiles() {
    const allTiles = document.querySelectorAll("#tiles > li");
    allTiles.forEach((tile) => {
        tile.style.backgroundColor = "white";
        tile.style.border = "0.001px dotted #202020";
    });
}

// Selectors.
const tiles = document.getElementById("tiles");
const resetButton = document.getElementById("reset");

// Add listener to the tiles.
tiles.addEventListener("click", (event) => {
    event.target.style.backgroundColor = setBackground();

    // Remove the border
    event.target.style.border = "none";
});

// Reset the tiles.
resetButton.addEventListener("click", resetTiles);
