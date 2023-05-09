/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			'blue-zodiac': '#12284C',
			'pastel-blue': '#A1C7FF',
			gray: '#929191',
			palatinate: '#692757',
			white: '#ffffff',
			black: '#000000',
			'dark-purple': '#151129'
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif']
		},
		variants: {
			animation: ['motion-safe']
		},
		extend: {
			media: {
				'3xl': '1600px'
			},
			minHeight: {
				0: '0',
				'1/4': '25%',
				'1/2': '50vh'
			},
			margin: {
				110: '27.5rem',
				120: '30rem',
				140: '35rem'
			},
			height: {
				'50vh': '50vh',
				'60vh': '60vh',
				'70vh': '70vh',
				'80vh': '80vh',
				'90vh': '90vh'
			}
		},
		plugins: []
	}
};
