/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{jsx,js,tsx,ts,html}", "./app/**/*.{jsx,js,tsx,ts,html}"],
  theme: {
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        "raw-umber": "#9E6240",
        "floral-white": "#FEF9EF",
        "light-blue": "#92C4CB",
        vanilla: "#E4D6A7",
        "hunyadi-yellow": "#E9B44C",
        verdigris: "#50A2A7",
        "uranian-blue": "#A5D8FF",
        "french-gray": "#BFB6BB",
        "rosy-brown": "#C49799",
        onyx: "#36393B",
        almond: "#E0D2C3",
        "english-violet": "#4D4861",
        "oxford-blue": "#02182B",
        "prussian-blue": "#003049",
        buff: "#DAA588",
        "indian-red": "#C46D5E",
        clay: "#B1A494",
        bisque: "#D8D8D8",
        "terra-cotta": "#E7A5A0",
      },
    },
  },
  plugins: [],
};
