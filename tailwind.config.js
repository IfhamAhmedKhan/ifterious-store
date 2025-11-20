/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // Use class-based dark mode so it never follows system theme.
  // We won't add the `dark` class yet, so everything stays light.
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4f46e5",
          dark: "#4338ca",
        },
      },
    },
  },
  plugins: [],
};
