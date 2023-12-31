'use strict';

// Selectors
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const button = document.querySelector('#start');
let lastHole;
let gameTime = 10; // seconds
let timeUp = false;
let score = 0;

// Random time for mole to pop up
function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

// Random hole for mole to pop up
function randomHole(holes) {
	const index = Math.floor(Math.random() * holes.length);
	const hole = holes[index];

	if (hole === lastHole) {
		return randomHole(holes);
	}

	lastHole = hole;
	return hole;
}

function pop() {
	const time = randomTime(400, 1200);
	const hole = randomHole(holes);
	hole.classList.add('up');
	setTimeout(() => {
		hole.classList.remove('up');

		// If time is not up, pop another mole
		if (!timeUp) pop();
	}, time);
}

// Start the game
function startGame() {
	scoreBoard.textContent = 0;
	timeUp = false;
	score = 0;
	pop();
	// Set interval for countdown
	const countdownInterval = setInterval(() => {
		gameTime--;
		button.innerHTML = `Time left: ${gameTime} sec`;

		// If time is up, stop the interval
		if (gameTime === 0) {
			clearInterval(countdownInterval);
			button.innerHTML = 'Try again?';
			timeUp = true;
			gameTime = 10;
		}
	}, 1000);
}

// Whack the mole
function whack(e) {
	if (!e.isTrusted) return;
	score++;
	this.classList.remove('up');
	scoreBoard.textContent = score;
}

moles.forEach((mole) => mole.addEventListener('click', whack));

// Start the game
button.addEventListener('click', startGame);
