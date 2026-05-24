/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#1a1410',
        cream: '#f5efe6',
        sand: '#ecdfc8',
        clay: '#9c6b3a',
        burnt: '#7a3a1f',
        moss: '#5a6048',
      },
    },
  },
  plugins: [],
}
