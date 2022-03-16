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
}
function toggleLightMode(state) {
	document.documentElement.classList.toggle("light-mode", state);
	lightModeState = state;
}
function setLightModeLocalStorage(state) {
	localStorage.setItem("light-mode", state);
}
