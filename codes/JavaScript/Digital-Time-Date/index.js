function setClock() {
	let time = new Date().toLocaleTimeString();
	let date = new Date().toLocaleDateString("en-GB");
	document.querySelector(".clock").innerHTML = `<h1>${time}</h1><p>${date}</p>`;
}

setInterval(setClock, 1000);
