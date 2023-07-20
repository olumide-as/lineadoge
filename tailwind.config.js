/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {

      fontFamily: {
        'righteous': ['Righteous', 'cursive'],
        'jost': ['jost', 'sans-serif'],
        "press": [ 'Press Start 2P', 'cursive']
      },


    },
  },
  plugins: [
    require('flowbite/plugin')
    
  ],
}