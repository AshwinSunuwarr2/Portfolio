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
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
  
      },
      animation: {
        ltr: "ltr 0.5s ease-in-out",
        rtl: "rtl 0.5s ease-in-out",
        toTop1: "toTop 0.2s ease-in-out",
        toTop2: "toTop 0.5s ease-in-out",
        toTop3: "toTop 0.8s ease-in-out",
        toTop4: "toTop 1s ease-in-out",
        toTop5: "toTop 1.3s ease-in-out",
      }
    },
  },
  plugins: [],
};
