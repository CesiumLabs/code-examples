const hexToRGB = (hexString) => {
	let red = hexString.substring(0, 2);
	let green = hexString.substring(2, 4);
	let blue = hexString.substring(4, 6);

	red = parseInt(red, 16);
	green = parseInt(green, 16);
	blue = parseInt(blue, 16);

	const obj = { red, green, blue };

	return obj;
};

console.log(hexToRGB("ffffff"));
