import request from "./request";

const CODE_URL = "https://api.github.com/repositories/412320515/contents/codes";

export const getLanguages = async () => {
	const res = await request("https://api.github.com/repositories/412320515/contents/codes", "GET");

	const data = await res.json();

	return data.map((e) => e.name);
};

export const getFiles = async (language) => {
	const res = await request(`https://api.github.com/repositories/412320515/contents/codes/${encodeURIComponent(language)}`, "GET");

	if (res.status == 404) return undefined;

	const data = await res.json();

	return data.map((obj) => {
		return {
			file: obj.name,
			dir: obj.type !== "file"
		};
	});
};

export const getContent = async (language, fileName) => {
	const res = await request(`https://raw.githubusercontent.com/DevSnowflake/code-examples/main/codes/${encodeURIComponent(language)}/${encodeURIComponent(fileName)}`, "GET");

	if (res.status == 404) return undefined;

	const data = await res.text();

	return data;
};
