/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./App.tsx", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        AppBackGround:"#192020",
        HomeScreenHeaderBG:"#133634",
        ModuleInfoBG:"#686868"
      },
      padding:{
        AppPadding:"-[15px]"
      }
    },
  },
  plugins: [],
};
