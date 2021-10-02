import Head from "next/head";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import { createRef, useState, useEffect } from "react";

export default function Home() {
	const searchString = createRef();
	function searchedAnimeButton() {
		window.location.href = `${window.location.href}/search?q=${searchString.current.value}`;
	}
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<Head>
				<title>The Anime Search</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<Image src={logo} />
				<div className="p-8">
					<div className="bg-white flex items-center rounded-full shadow-xl">
						<input ref={searchString} className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"></input>

						<div className="p-4">
							<button onClick={searchedAnimeButton} className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
								🔍
							</button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
