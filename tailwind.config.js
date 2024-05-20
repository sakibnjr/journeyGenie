/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1589F7",
        secondary: "#FDCD3F",
        background: "#E5F3FF",
        ternary: "#78DC7B",
        ternary2: "#FE663E",
      },
    },
  },
  plugins: [require("daisyui")],
};
