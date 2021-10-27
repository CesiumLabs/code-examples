if (navigator.serviceWorker) {
	navigator.serviceWorker
		.register("sw.js")
		.then((registration) => console.log(`SW Registered!\n${registration}`))
		.catch((error) => console.log(`SW Failed to register!\n${error}`));
}
