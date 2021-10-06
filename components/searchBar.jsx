const SearchBar = () => {
    return(
<div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-8 py-4 justify-between m-32">
					<input className="text-base text-gray-400 flex-grow outline-none px-2 " type="text" placeholder="Search for a snippet" />
					<div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
						<button type="submit" className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">Search</button>
					</div>
				</div>
    )
}

export default SearchBar;
