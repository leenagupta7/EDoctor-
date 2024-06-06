/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green-blue': 'rgb(46, 200, 150)',
      },
      backgroundImage: {
       'custom-gradient': 'linear-gradient(to right, #000000, #000000 0%, #a8e6cf 100%)',
'gray-gradient': 'linear-gradient(to right, #000000, #000000 0%, #a6a6a6 100%)',

        'pink-btn':'linear-gradient(to right, #4a148c, #4a148c 1%, #f9a8d4 100%)',
      },
      fontFamily: {
        'proxima': ['"Proxima Nova"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}