import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         keyframes: {
            'slide-up': {
               '0%': { opacity: '0', transform: 'translateY(10px)' },
               '100%': { opacity: '1', transform: 'translateY(0)' },
            },
         },
         animation: {
            'slide-up': 'slide-up 0.3s ease-out forwards',
         },
      },
   },
   plugins: [],
};
export default config;
