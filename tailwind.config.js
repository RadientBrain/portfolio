/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia"],
        body: ["Outfit", "ui-sans-serif", "system-ui"]
      },
      colors: {
        canvas: {
          50: "#fdf9f3",
          100: "#f4ede3"
        },
        ink: {
          900: "#1b1a17",
          700: "#2f2a25"
        },
        brand: {
          500: "#1f6f5c",
          600: "#165346"
        },
        accent: {
          500: "#d4a24b",
          600: "#b7852f"
        }
      },
      boxShadow: {
        glow: "0 24px 64px rgba(31, 111, 92, 0.2)"
      }
    }
  },
  plugins: [forms, typography]
};
