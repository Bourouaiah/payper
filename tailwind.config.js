/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-green': '#80e142',
        'bright-green': '#9fe870',
        'forest-green': '#163300',
        'main-gray': 'rgba(22,51,0,.078)',
        'second-gray': '#454745',
        'third-gray': '#6c6c6b',
        'main-black': '#0e0f0c',
      }
    },
  },
  plugins: [],
}

