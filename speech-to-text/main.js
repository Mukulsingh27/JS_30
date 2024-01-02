"use strict";

// Select the HTML elements
const card = document.querySelector(".card");

window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

// Create an element
let paragraph = document.createElement("p");
card.appendChild(paragraph);

recognition.addEventListener("result", (e) => {
	const transcript = Array.from(e.results)
		.map((result) => result[0])
		.map((result) => result.transcript)
		.join("");

	paragraph.textContent = transcript;

	if (e.results[0].isFinal) {
		paragraph = document.createElement("p");
		card.appendChild(paragraph);
	}

	if (transcript.includes("Unicorn")) {
		cornify_add();
	}
});

recognition.addEventListener("end", recognition.start);
recognition.start();
