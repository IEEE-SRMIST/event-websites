module.exports = {
	mode: "jit",
	purge: {
		content: [
			"./pages/**/*.{js,ts,jsx,tsx}",
			"./components/**/*.{js,ts,jsx,tsx}",
		],
		safelist: [
			"bg-speaker-1",
			"bg-speaker-2",
			"bg-speaker-3",
			"bg-speaker-4",
			"bg-speaker-5",
			"bg-speaker-6",
		],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			xs: "480px",
			sm: "640px",
			md: "768px",
			"2md": "900px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		extend: {
			colors: {
				background: { primary: "#0A0A0A", secondary: "#151515" },
				text: {
					secondary: "#888888",
					primary: "#E5E5E5",
				},
				telegramButton: "#3190FE",
				liveButton: "#8685EF",
				speaker: {
					1: "#EEBB4D",
					2: "#71A0CE",
					3: "#E5707E",
					4: "#B6BAEA",
					5: "#E78967",
					6: "#8FA963",
				},
				border: {
					1: "#EBB722",
					2: "#3190FE",
					3: "#DF2860",
					4: "#8862D1",
					5: "#CB5345",
					6: "#79DF89",
				},
			},
			backgroundImage: {
				sponsor: "url('/sponsorbg.png')",
				hero: "url('/wave.svg')",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
