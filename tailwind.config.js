/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'zen-dots': ['Zen Dots', 'sans-serif'],
        'aoboshi': ['Aoboshi One', 'sans-serif'],
        'inria': ['Inria Sans','sans-serif'],
        'one': ['Aoboshi One' , 'sans-serif']
      },
      colors:{
      'fundo-bg': '#0D0D0D',
      'bg-container': '#0C2B3240' ,
      'verde': '#17625b',
      'verdinho': '#4fc3a1',
      'azulEscuro': '#0c2b32',
      'azul': '#041c34',
      'azulzao': '#091116',
      'bgverde' : '#1C2825',
      'fundo': '#2e6f24'
      }
    },

  },
  plugins: [],
}
