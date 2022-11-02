module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
			poppins: ['Poppins', 'sans-serif'],
			roboto: ['Roboto', 'sans-serif']
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
				"solarBlue": "#0a3e76",
				"solarBlack": "#111b27",
				"solarGray": "#ebebeb",
			},
			boxShadow: {
				DEFAULT: '0px 0px 15px 0px rgba(0, 0, 0, 0.07)',
				wide: '-9.192px -9.192px 57px 0px rgba(0, 0, 0, 0.3)',
				small: '-4px -4px 57px 0px rgba(0, 0, 0, 0.3)',
			},
		}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
