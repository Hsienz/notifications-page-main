/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{tsx,ts,js,jsx}'],
	theme: {
		extend: {
			colors: {
				// Primary

				Red: "hsl(1, 90%, 64%)",
				Blue: "hsl(219, 85%, 26%)",

				// Neutral

				White: "hsl(0, 0%, 100%)",
				Very_light_grayish_blue: "hsl(210, 60%, 98%)",
				Light_grayish_blue_1: "hsl(211, 68%, 94%)",
				Light_grayish_blue_2: "hsl(205, 33%, 90%)",
				Grayish_blue: "hsl(219, 14%, 63%)",
				Dark_grayish_blue: "hsl(219, 12%, 42%)",
				Very_dark_blue: "hsl(224, 21%, 14%)",
			},
			fontFamily: {
				sans: ["Plus Jakarta Sans", "sans-serif"],
			},
		},
	},
	plugins: [],
};
