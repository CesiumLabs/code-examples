import { useRouter } from "next/router";
import Head from "next/head";

function Search() {
	const route = useRouter();
	return (
		<div>
			<Head>
				<title>{`Search Result: ${route.query.q} - The Anime Search`}</title>
				<link rel="stylesheet" href="search.css" />
			</Head>
			<main>
				<h3> Results </h3>
				<div class="card_container">
					<div class="card">
						<a href="url">
							<img src="https://cdn.discordapp.com/attachments/880732844220100608/893753030489550869/logo_sugoi.jpg"
								class="card_image" alt="image" />
							<h3 class="card_title">title</h3>
						</a>
					</div>
					<div class="card">
						<a href="url">
							<img src="https://cdn.discordapp.com/attachments/880732844220100608/893753030489550869/logo_sugoi.jpg"
								class="card_image" alt="image" />
							<h3 class="card_title">title</h3>
						</a>
					</div>
					<div class="card">
						<a href="url">
							<img src="https://cdn.discordapp.com/attachments/880732844220100608/893753030489550869/logo_sugoi.jpg"
								class="card_image" alt="image" />
							<h3 class="card_title">title lorem</h3>
						</a>
					</div>
					<div class="card">
						<a href="url">
							<img src="https://cdn.discordapp.com/attachments/880732844220100608/893753030489550869/logo_sugoi.jpg"
								class="card_image" alt="image" />
							<h3 class="card_title">title</h3>
						</a>
					</div>
					<div class="card">
						<a href="url">
							<img src="https://cdn.discordapp.com/attachments/880732844220100608/893753030489550869/logo_sugoi.jpg"
								class="card_image" alt="image" />
							<h3 class="card_title">title</h3>
						</a>
					</div>
					<div class="card">
						<a href="url">
							<img src="https://cdn.discordapp.com/attachments/880732844220100608/893753030489550869/logo_sugoi.jpg"
								class="card_image" alt="image" />
							<h3 class="card_title">title</h3>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
export default Search;