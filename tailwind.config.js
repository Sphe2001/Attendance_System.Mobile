/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        AppBackGround: "#061217",
        HomeScreenHeaderBG: "#092029",
        ModuleInfoBG: "#1b3738",
        ModuleInfoLate: "#993434",
        ModuleInfoPresent: "#10752f",
      },
      padding: {
        AppPadding: "-[15px]",
      },
    },
  },
  plugins: [],
};
