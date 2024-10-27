/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{svelte,js,ts}',
  ],
  theme: {
    extend: {},
    colors: {
      green: '#009036',
      text: '#0B7332',
      darkText: '#00521F',
      gray: '#F6F6F6',
      textgray: '#888282',
      input: '#D9D9D9',
      black: '#000',
    },
    fontFamily: {
      'inter': ["Inter", "sans-serif"],
    }
  },
  plugins: [],
}

