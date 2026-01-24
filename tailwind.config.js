/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "ui-sans-serif", "system-ui"],
        body: ["Manrope", "ui-sans-serif", "system-ui"]
      },
      colors: {
        canvas: {
          50: "#f8fafc",
          100: "#f1f5f9"
        },
        ink: {
          900: "#0b1120",
          700: "#1f2937"
        },
        brand: {
          500: "#0ea5e9",
          600: "#0284c7"
        },
        accent: {
          500: "#f97316",
          600: "#ea580c"
        }
      },
      boxShadow: {
        glow: "0 24px 64px rgba(14, 165, 233, 0.18)"
      }
    }
  },
  plugins: [forms, typography]
};
