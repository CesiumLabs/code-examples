import React from 'react';
import 'tailwindcss/tailwind.css';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class" enableSystem={false}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
