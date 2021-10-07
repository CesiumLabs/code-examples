export default function SearchBar() {
	return (
		<div className="md:px-0 px-7">
			<div className="flex items-center bg-white rounded-lg mx-auto p-5 w-full md:w-1/2 overflow-hidden px-8 py-4 justify-center m-32">
				<input className="text-base text-gray-400 flex-grow outline-none px-2 w-full" type="text" placeholder="Search for a snippet" />
				<div className="px-1 rounded-lg mx-auto">
					<button type="submit" className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">
						Search
					</button>
				</div>
			</div>
		</div>
	);
};
