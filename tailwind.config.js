/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        gray: "var(--gray)",
        heading: "var(--text-primary)",
        body: "var(--text-secondary)",
        border: "var(--border)",
        hover: "var(--hover)",
      },
      keyframes: {
        status: {
          "0%": { width: "32px", height: "32px" },
          "100%": { width: "24px", height: "24px" },
        },
      },
      animation: {
        status: "status 0.8s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
