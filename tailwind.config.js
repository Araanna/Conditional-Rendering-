module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all React files
  ],
  theme: {
    extend: {
      colors: {
        neonPink: "#ff007f", // Neon Pink
        neonBlue: "#00f5ff", // Neon Blue
        neonGreen: "#39ff14", // Neon Green
        neonPurple: "#9b00ff", // Neon Purple
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'], // Use the Roboto font
      },
      boxShadow: {
        neon: "0 0 5px 2px rgba(255, 0, 127, 0.8), 0 0 10px 4px rgba(255, 0, 127, 0.7), 0 0 15px 6px rgba(255, 0, 127, 0.6)", // Neon glow effect
      },
      textShadow: {
        neon: "0 0 5px rgba(255, 0, 127, 0.8), 0 0 10px rgba(255, 0, 127, 0.7), 0 0 15px rgba(255, 0, 127, 0.6)", // Neon text glow
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Example plugin for forms
    require('@tailwindcss/typography'), // Example plugin for typography
  ],
};
