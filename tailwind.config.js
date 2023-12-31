module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f9fbff",
          200: "#efefef",
          400: "#b3b3b3",
          500: "#a6a6a6",
          800: "#434041",
          900: "#0d1624",
          "50_05": "#fafcff",
          "50_04": "#fffcf3",
          "50_03": "#f4f8ff",
          "50_02": "#f5f9ff",
          "50_01": "#f8f9fa",
          "900_04": "#09101d",
          "900_03": "#11142d",
          "800_01": "#3c4043",
          "300_99": "#e4e4e499",
          "900_02": "#151522",
          "900_01": "#242424",
          "500_01": "#979797",
          "800_2b": "#4545452b",
          "700_11": "#55555511",
          "700_26": "#55555526",
        },
        white: {
          A700_0c: "#ffffff0c",
          A700: "#ffffff",
          A700_b2: "#ffffffb2",
          A700_66: "#ffffff66",
          A700_67: "#ffffff67",
          A700_87: "#ffffff87",
        },
        black: {
          900: "#000000",
          "900_0c": "#0000000c",
          "900_0e": "#0000000e",
          "900_b2": "#000000b2",
          "900_3f": "#0000003f",
          "900_e4": "#000000e4",
          "900_29": "#00000029",
          "900_01": "#090b0d",
          "900_02": "#130e00",
        },
        blue: {
          50: "#e0ebff",
          400: "#3a96dd",
          600: "#378fd3",
          800: "#0051d5",
          900: "#003995",
          A700_01: "#0a58ff",
          A700: "#0061ff",
          A700_02: "#0065ff",
          A200: "#4d90ff",
          A700_7e: "#0061ff7e",
          A200_01: "#4285f4",
        },
        blue_gray: {
          50: "#eaecf0",
          100: "#d6dae2",
          200: "#bac1ce",
          300: "#9ea8ba",
          400: "#74839d",
          500: "#747c89",
          600: "#5f6c86",
          700: "#424c5d",
          800: "#37334d",
          900: "#262b35",
          "100_01": "#d6d5d5",
          "100_6c": "#d1d3d46c",
          "900_01": "#24363c",
          "300_87": "#919eab87",
          "900_02": "#333438",
          "700_01": "#535353",
          "700_02": "#535763",
          "400_01": "#808191",
          "900_7f": "#3333337f",
        },
        colors4: "#000000ff",
        amber: { 500: "#feb909", "500_01": "#fbbc04" },
        light_blue: {
          100: "#b0e5fc",
          400: "#1ba9ff",
          600: "#179bd7",
          A700: "#0086ed",
          A100: "#67d7fd",
        },
        green: {
          300: "#8be48b",
          400: "#65bc6a",
          600: "#349765",
          700: "#398f3e",
          800: "#29752b",
          900: "#236823",
          A100: "#b5eacd",
          "600_02": "#1ea84d",
          "600_01": "#34a853",
        },
        deep_orange: { 100: "#fec1c1" },
        colors: "#0061ffff",
        red: {
          200: "#fa9a9a",
          500: "#ea4335",
          700: "#d03329",
          A200: "#fe555d",
        },
        colors6: "#1ea84dff",
        colors5: "#2c2b2bff",
        colors1: "#090b0dff",
        colors8: "#d03329ff",
        orange: { A700: "#ff6700" },
        yellow: { 900: "#f7931a" },
        colors10: "#130e00ff",
        indigo: { 800: "#253b80", 900: "#222d65" },
        colors9: "#262b35ff",
        colors2: "#74839dff",
        colors3: "#349765ff",
        colors7: "#858082ff",
      },
      backgroundImage: {
        gradient: "linear-gradient(135.84668deg ,#ffffff,#ffffff66)",
        gradient1: "linear-gradient(90deg ,#378fd3,#3a96dd,#3a96dd)",
      },
      fontFamily: {
        gilroy: "Gilroy",
        urbanist: "Urbanist",
        opensans: "Open Sans",
        poppins: "Poppins",
        montserrat: "Montserrat",
        lato: "Lato",
        sfprotext: "SF Pro Text",
        inter: "Inter",
      },
      boxShadow: {
        bs4: "0px 4px  8px -4px #0000003f",
        bs3: "0px 0px  10px 0px #55555526",
        bs: "0px 0px  10px 4px #55555511",
        bs1: "0px 4px  10px 4px #0000000c",
        bs2: "0px 15px  20px 0px #4545452b",
      },
      fontWeight: { fw: 250 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
