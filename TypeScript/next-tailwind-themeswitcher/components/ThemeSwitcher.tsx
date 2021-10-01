import React, {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';

const ThemeSwitch = () => {
	const [mounted, setMounted] = useState(false);
	const {theme, setTheme, resolvedTheme} = useTheme();

	// When mounted on client, now we can show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<button
			aria-label="Toggle Light Mode"
			type="button"
			className="focus:outline-none bg-none bg-gray-300 dark:bg-gray-800 rounded-lg p-3 h-10 w-10 flex items-center justify-center"
			onClick={() => {
				setTheme(theme === 'light' || resolvedTheme === 'light' ? 'dark' : 'light');
			}}
		>
			{mounted && (theme === 'light' || resolvedTheme === 'light') ? (
				<i className="fas fa-moon text-gray-800" />
			) : (
				<i className="fas fa-sun text-white" />
			)}
		</button>
	);
};

export default ThemeSwitch;
