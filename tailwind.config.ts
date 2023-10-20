import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: { current: "currentColor", transparent: "transparent", "raw-umber": "#9E6240", "floral-white": "#FEF9EF", "light-blue": "#92C4CB", vanilla: "#E4D6A7", "hunyadi-yellow": "#E9B44C", verdigris: "#50A2A7", "uranian-blue": "#A5D8FF", "french-gray": "#BFB6BB", "rosy-brown": "#C49799", onyx: "#36393B", almond: "#E0D2C3", "english-violet": "#4D4861", "oxford-blue": "#02182B", "prussian-blue": "#003049", buff: "#DAA588", "indian-red": "#C46D5E", clay: "#B1A494", bisque: "#D8D8D8", "terra-cotta": "#E7A5A0" },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
