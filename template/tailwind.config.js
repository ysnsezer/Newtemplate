/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
      },
      flexGrow: {
        2: '2'
      }
    },
  },
  plugins: [],
 
    variants: {
      // ...
    margin: ['hover'],
    margin: ['responsive', 'hover'],
    }
  }
