/** @type {import('tailwindcss').Config} */
import { blackA, mauve, violet } from "@radix-ui/colors";

const tailwindConfig = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
