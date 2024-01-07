/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        btnColor: '#7192F4',
        secondaryColor: '#D6D6D6',
        darkBlue: '#007AFF',
        adminBG: '#EAEDF7',
      },
    },
  },
  daisyui: {
    themes: ['cupcake', 'cmyk'],
  },
  plugins: [require('daisyui')],
};
