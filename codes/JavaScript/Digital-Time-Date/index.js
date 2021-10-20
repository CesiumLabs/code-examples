const clock = document.querySelector(".clock");

setInterval(() => {
    const date = new Date();
    clock.innerHTML = `<h1>${date.toLocaleTimeString()}</h1><p>${date.toLocaleDateString("en-GB")}</p>`;
}, 1000);
