module.exports = {
  theme: {
    extend: {
      colors: {
        gits_white: '#E6E4DD',
        gits_blue: '#202F46',
        gits_violet: '#7A728A',
        gits_rusty: '#AE680F',
        gits_lightblue: '#178F9D'
      },
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    }
  },
  variants: {},
  plugins: [],
  content: [
    './src/pages/**/*.{html,js,jsx,ts,tsx}',
    './src/components/**/*.{html,js,jsx,ts,tsx}',
  ],
}
