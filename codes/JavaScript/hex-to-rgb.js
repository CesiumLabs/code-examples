const hexToRGB = (hexString) => {
	return {
		red: parseInt(hexString.slice(0, 2), 16),
         	green: parseInt(hexString.slice(2, -2), 16),
		blue: parseInt(hexString.slice(-2), 16)
	}
};

console.log(hexToRGB("ffffff"));
