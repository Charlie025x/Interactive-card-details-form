/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-hero-image": "url('/src/images/bg-main-mobile.png')",
        "desktop-hero-image": "url('/src/images/bg-main-desktop.png')",
        "card-front": "url('/src/images/bg-card-front.png')",
        "card-back": "url('/src/images/bg-card-back.png')",
      },
    },
  },
  plugins: [],
};
