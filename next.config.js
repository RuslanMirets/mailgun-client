/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
		APP_URL: process.env.APP_URL,
	},
	experimental: {
		fontLoaders: [
			{ loader: "@next/font/google", options: { subsets: ["latin"] } },
		],
	},
};

module.exports = nextConfig;
