'use strict';

// Draw function.
function draw(event) {
	// Bail.
	if (!isDrawing) return;

	// set the stroke color.
	ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

	// Draw.
	ctx.beginPath();

	// Start from.
	ctx.moveTo(lastX, lastY);

	// Go to.
	ctx.lineTo(event.offsetX, event.offsetY);
	ctx.stroke();

	// Update the last position.
	[lastX, lastY] = [event.offsetX, event.offsetY];

	// Reset the hue.
	if (hue >= 360) hue = 0;

	// Update the hue.
	hue++;
}

// Selectors.
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// Config Settings.
const penCap = document.querySelector('#pen-cap');
const penComposition = document.querySelector('#composition');
const reset = document.querySelector('#reset');

// Initialize.
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

// Make the canvas size equal to the window size.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Default stroke style.
ctx.strokeStyle = '#000';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 40;
ctx.globalCompositeOperation = 'source-over';

// Event listeners.
canvas.addEventListener('mousedown', (event) => {
	isDrawing = true;
	// Update the last position.
	[lastX, lastY] = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));

// Range Slider
const range = document.querySelector('.range input');
const rangeSpan = document.querySelector('.range span');

range.addEventListener('mousemove', function () {
	var getValRange = this.value;
	rangeSpan.textContent = getValRange + '%';
});

// Event listeners for config settings.
penCap.addEventListener('change', () => (ctx.lineCap = penCap.value));
range.addEventListener('change', () => (ctx.lineWidth = range.value));
penComposition.addEventListener(
	'change',
	() => (ctx.globalCompositeOperation = penComposition.value)
);
reset.addEventListener('click', () =>
	ctx.clearRect(0, 0, canvas.width, canvas.height)
);
