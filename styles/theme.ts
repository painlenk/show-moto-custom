import { emit } from "process";

const theme = {
  colors: {
    background: `#202020`,
    cards: "255, 255, 255, 0.9",
    text: {
      white: {
        light: "#D7D7D7",

      },
      gray: {
        light: "#2E2E2E",
      },
      primary: "#FF9900"

    },
  },

  fontSize: {
    title: "2.25em",
    text: "1em",
    subText: "0.875em",
  },

  fontWeight: {
    heavy: "700",
    bold: "600",
    medium: "400",
    light: "100",
  },
  radius: {
    normal: "8px",
  }
};

export default theme;
