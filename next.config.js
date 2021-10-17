/** @type {import('next').NextConfig} */
module.exports = {
	target: "serverless",
	reactStrictMode: true,
	typescript: {
		ignoreBuildErrors: true
	},
	experimental: {
		nftTracing: true
	},
	serverRuntimeConfig: {
		PROJECT_ROOT: process.cwd()
	}
};
