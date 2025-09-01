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
        // Roboto Family
        'roboto': ['Roboto-Regular'],
        'roboto-bold': ['Roboto-Bold'],
        'roboto-extra-bold': ['Roboto-ExtraBold'],
        'roboto-extra-light': ['Roboto-ExtraLight'],
        'roboto-light': ['Roboto-Light'],
        'roboto-medium': ['Roboto-Medium'],
        'roboto-semi-bold': ['Roboto-SemiBold'],
        'roboto-regular': ['Roboto-Regular'],
        'roboto-thin': ['Roboto-Thin'],
        
        // Ubuntu Family
        'ubuntu': ['Ubuntu-Regular'],
        'ubuntu-bold': ['Ubuntu-Bold'],
        'ubuntu-medium': ['Ubuntu-Medium'],
        'ubuntu-light': ['Ubuntu-Light'],
        'ubuntu-italic': ['Ubuntu-Italic'],
      },
      colors:{
        'light-blue': '#E0F7FA',
        'dark-blue': '#007BFF',
        'dark-grey': '#4A4A4A',
      }
    },
  },
  plugins: [],
}
