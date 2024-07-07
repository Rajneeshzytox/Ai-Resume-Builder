/** @type {import('tailwindcss').Config} */


export default {
  //...
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // add daisyUI plugin
  plugins: [require("daisyui")],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [ 
      "light",
      "dark",
      {
      rajneesh: {
          "primary": "#1d4ed8",
          "primary-content": "#cfdefb",
          "secondary": "#d1d5db",
          "secondary-content": "#101011",
          "accent": "#818cf8",
          "accent-content": "#060715",
          "neutral": "#6b7280",
          "neutral-content": "#e0e1e4",
          "base-100": "#1f2937",
          "base-200": "#19222e",
          "base-300": "#141c26",
          "base-content": "#cdd0d3",
          "info": "#1d4ed8",
          "info-content": "#cfdefb",
          "success": "#22c55e",
          "success-content": "#000e03",
          "warning": "#f59e0b",
          "warning-content": "#150900",
          "error": "#e11d48",
          "error-content": "#ffd8d9",
         },
      }

    ],
  },

  //...
}