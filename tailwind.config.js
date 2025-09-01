/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/screens/**/*.{js,jsx,ts,tsx}",
    "./src/navigation/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto-bold': ['Roboto-Bold'],
        'roboto-extra-regular': ['Roboto-Extra-Regular'],
        'roboto-extra-light': ['Roboto-Extra-Light'],
        'roboto-light': ['Roboto-Light'],
        'roboto-medium': ['Roboto-Medium'],
        'roboto-regular': ['Roboto-Regular'],
        'roboto-semi-medium': ['Roboto-Semi-Medium'],
        'roboto-thin': ['Roboto-Thin'],
        'ubuntu': ['Ubuntu-Regular'],
        'ubuntu-bold': ['Ubuntu-Bold'],
        'ubuntu-medium': ['Ubuntu-Medium'],
        'ubuntu-light': ['Ubuntu-Light'],
      }
    },
  },
  plugins: [],
}
