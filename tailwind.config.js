/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        ashwin: "url(./assets/images/me.jpg)",
      },
      backgroundColor: {
        primary: "#F8ECEC", 
      }
    },
  },
  plugins: [],
};
