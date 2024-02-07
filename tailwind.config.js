/** @type {import('tailwindcss').Config} */

export default ({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1440px",
      },
      backgroundImage: {
        'bgd': "url('../images/bg.jpg')"
      },
      colors:  {
        v: '#7c7cb3',
        vBtnHover: "#5b5bae",
      }
    }

  },
  plugins: ["prettier-plugin-tailwindcss"],
});
