import Fuse from "fuse.js";

export default function searchEngine<T = unknown>(query: string, factors: string[], data: T[]): T[] {
	const fuse = new Fuse(data, {
		shouldSort: true,
		threshold: 0.5,
		location: 0,
		distance: 80,
		minMatchCharLength: 1,
		keys: factors
	});

	const result = fuse.search(query);

	return result.map((m) => m.item);
}
