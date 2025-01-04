import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "info": "#00b4d8",
        "title": "#03045e",
        "desc": "#354f52",
        "warning": "#f4a261",
        "special-txt": "#6a040f",
        "secondary": "#F2F9FF",
        "lite-transparent": "#f2f9ffd4",
        "dark": "#0B192C",
        "dark-transparent": "#0b192ceb",
        "dark-lite": "#85888a",
        "dark-main-sec": "#161A30"
      }
    },
  },
  plugins: [daisyui],
  darkMode: "class"
}