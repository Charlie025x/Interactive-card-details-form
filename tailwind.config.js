/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "mobile-hero-image": "url('/images/bg-main-mobile.png')",
        "desktop-hero-image": "url('/images/bg-main-desktop.png')",
        "card-front": "url('/images/bg-card-front.png')",
        "card-back": "url('/images/bg-card-back.png')",
      },
    },
  },
  plugins: [],
};
