import React from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';
import Head from 'next/head';

export default function Home() {
	return (
		<html lang="en">
			<body className="bg-gray-200 dark:bg-gray-900">
				<Head>
					<title>Next.js TypeScript TailwindCSS ThemeSwitcher example.</title>
					<link rel="icon" type="image/png" href="/favicon.ico" />
					<link
						rel="stylesheet"
						href="https://pro.fontawesome.com/releases/v5.14.0/css/all.css"
						integrity="sha384-VhBcF/php0Z/P5ZxlxaEx1GwqTQVIBu4G4giRWxTKOCjTxsPFETUDdVL5B6vYvOt"
						crossOrigin="anonymous"
					/>
				</Head>
				<div className="flex justify-center h-screen">
					<div className="my-auto lg:ml-5 md:ml-5 sm:ml-5 xs:ml-3 ml-5 ">
						<div className="flex items-center justify-center">
							<ThemeSwitcher />{' '}
							<h1 className="text-gray-900 dark:text-white text-2xl font-bold">{' '}🠔 Click me to see text colour change!</h1>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
