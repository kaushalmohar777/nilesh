// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      colors: {
        pale: '#F5F5ED', // now you can use `bg-pale`
      },
    },
  },
  plugins: [],
}
