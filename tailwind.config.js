module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    fontFamily: {
			baiJam: ['Bai Jamjuree', 'serif'],
			lato: ['Lato', 'sans-serif'],
		},
		screens: {
			xs: "530px",
			sm: "640px",
			md: "768px",
			desk: "890px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},

		extend: {
			colors: {
				"tritonBlue": "#01529a",
				"tritonGreen": "#27b061",
				"tritonBlack": "#1f2022",
				"tritonGray": "#818181",
				"tritonLight": "#fbfbfb"
			}
		}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
