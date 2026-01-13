/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pop: {
          cyan: '#00ffff',
          magenta: '#ff00ff',
          lime: '#ccff00',
          yellow: '#ffff00',
        }
      }
    },
  },
  plugins: [],
};
