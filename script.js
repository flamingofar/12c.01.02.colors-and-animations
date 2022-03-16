"use strict;";

window.addEventListener("DOMContentLoaded", start);

function start() {
	const toggleSwitch = document.querySelector("#theme");
	const useDark = window.matchMedia("(prefers-color-scheme: light)");
	let lightModeState = localStorage.getItem("light-mode") == "true";
	toggleSwitch.checked = localStorage.getItem("light-mode") == "true" ? toggleSwitch.classList.add("checked") : toggleSwitch.classList.add("s");

	setLightModeLocalStorage(lightModeState);
	toggleLightMode(useDark.matches);
	toggleLightMode(localStorage.getItem("light-mode") == "true");

	useDark.addListener((evt) => {
		evt.matches;
	});

	toggleSwitch.addEventListener("click", () => {
		toggleSwitch.classList.toggle("checked");
		document.documentElement.classList.toggle("light-mode");

		lightModeState = !lightModeState;
		toggleLightMode(lightModeState);
		setLightModeLocalStorage(lightModeState);
	});

	// Button Animation
	const btns = document.querySelectorAll(".custom_button");

	btns.forEach((btn) => {
		const bubble = btn.querySelector(".button_bubble");
		console.log(bubble);

		btn.addEventListener("click", (e) => {
			console.log(e.offsetX);
			const x = e.offsetX;
			const y = e.offsetY;
			bubble.style.visibility = "visible";
			bubble.style.top = `${y}px`;
			bubble.style.left = `${x}px`;

			const bubble_kf = [
				{ transform: `scale(1)`, opacity: 1 },
				{ transform: `scale(100)`, opacity: 0 },
			];
			const bubble_props = { duration: 500, iteration: 1, fill: "forwards" };
			const bubble_ani = bubble.animate(bubble_kf, bubble_props);
		});
	});
}
function toggleLightMode(state) {
	document.documentElement.classList.toggle("light-mode", state);
	lightModeState = state;
}
function setLightModeLocalStorage(state) {
	localStorage.setItem("light-mode", state);
}
