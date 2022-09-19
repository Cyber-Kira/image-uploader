/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: 'Poppins, sans-serif',
			},
			boxShadow: {
				main: '0px 4px 12px rgba(0, 0, 0, 0.1)',
			},
			keyframes: {
				indeterminateAnimation: {
					'0%': {
						transform: 'translateX(0) scaleX(0)',
					},
					'40%': {
						transform: 'translateX(0) scaleX(0.3)',
					},
					'100%': {
						transform: 'translateX(100%) scaleX(0.5)',
					},
				},
			},
			animation: {
				indeterminate: 'indeterminateAnimation 1s infinite linear',
			},
		},
		colors: {
			transparent: 'transparent',
			white: '#FFFFFF',
			dark: '#4F4F4F',
			gray: '#828282',
			backGray: '#E0E0E0',
			lightGray: '#BDBDBD',
			accentBlue: '#2F80ED',
			accentGreen: '#219653',
		},
	},
	plugins: [],
}
