import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme, resolvedTheme } = useTheme();

	useEffect(() => {
		setMounted(true); // Mounts the button ui on the client. 
	}, []);

	return (
		<button
			aria-label="Toggle Light Mode"
			type="button"
			className="focus:outline-none bg-none bg-gray-300 dark:bg-gray-800 rounded-lg p-3 h-10 w-10 flex items-center justify-center"
			onClick={() => {
				setTheme(theme === 'light' || resolvedTheme === 'light' ? 'dark' : 'light'); // If the theme is light, the onClick even will change the theme to dark, if not it will change the theme to light.
			}}
		>
			{mounted && (theme === 'light' || resolvedTheme === 'light') ? (  // If the theme is light, the button icon will be the "moon" indicating dark theme, if not the button icon will be the "sun" indicating light theme.
				<i className="fas fa-moon text-gray-800" />
			) : (
				<i className="fas fa-sun text-white" />
			)}
		</button>
	);
};

export default ThemeSwitcher; // Exports ThemeSwitch, enabling it to be used in other pages, components, etc.

/*

	import ThemeSwitcher from "../components/ThemeSwitcher";


	<ThemeSwitcher/>

*/
