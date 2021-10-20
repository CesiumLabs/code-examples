import request from "./request";

const CODE_URL = "https://api.github.com/repositories/412320515/contents/codes";
const contentCache = new Map<string, any>();

export const getLanguages = async () => {
	if (contentCache.has("codes")) return contentCache.get("codes") as string[];
	const res = await request(CODE_URL, "GET");
	const data = await res.json();

	const newData = Array.isArray(data) ? data.map((e) => e.name) : [];
	if (newData.length) contentCache.set("codes", newData);
	return newData;
};

export const getFiles = async (language) => {
	if (contentCache.has(`codes_${language}`)) return contentCache.get(`codes_${language}`);
	const res = await request(`https://api.github.com/repositories/412320515/contents/codes/${encodeURIComponent(language)}`, "GET");

	if (!res.ok) return undefined;

	const data = await res.json();

	const newData = data.map((obj) => {
		return {
			file: obj.name,
			dir: obj.type !== "file"
		};
	});

	contentCache.set(`codes_${language}`, newData);

	return newData;
};

export const getContent = async (language, fileName) => {
	const res = await request(`https://raw.githubusercontent.com/DevSnowflake/code-examples/main/codes/${encodeURIComponent(language)}/${encodeURIComponent(fileName)}`, "GET");

	if (res.status == 404) return undefined;

	const data = await res.text();

	return data;
};
