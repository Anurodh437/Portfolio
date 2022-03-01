module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'grayish':'#1f1e33',
        'loving':'#9502f3'
      },
      height:{
        '100':'420px',
        '200':'450px',
      },
    },
  },
  plugins: [
    require('@themesberg/flowbite/plugin')
  ],
};
