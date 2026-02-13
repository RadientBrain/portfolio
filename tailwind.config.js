/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"] ,
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "ui-sans-serif", "system-ui"],
        body: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui"]
      },
      colors: {
        canvas: {
          50: "#fbfaf7",
          100: "#f1ece4"
        },
        ink: {
          900: "#14110f",
          700: "#2f2b27"
        },
        brand: {
          500: "#1db49a",
          600: "#13846f"
        },
        accent: {
          500: "#f4b843",
          600: "#d19022"
        }
      },
      boxShadow: {
        glow: "0 24px 64px rgba(29, 180, 154, 0.25)"
      }
    }
  },
  plugins: [forms, typography]
};
