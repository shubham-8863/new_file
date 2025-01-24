/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
      "./public/index.html",        // Include HTML files
    ],
    theme: {
      extend: {
        colors: {
          customBlue: "#1E40AF",    // Example custom color
          customGray: "#64748B",
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"], // Add custom fonts
        },
      },
    },
    plugins: [],
  };