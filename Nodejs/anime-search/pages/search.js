import { useRouter } from "next/router";
import Head from "next/head";

function Search() {
	const route = useRouter();
	return (
		<div>
			<Head>
				<title>{`Search Result: ${route.query.q} - The Anime Search`}</title>
			</Head>
			<main>
				<h1> Search </h1>
			</main>
		</div>
	);
}
export default Search;
