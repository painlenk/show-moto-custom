import { emit } from "process";

const theme = {
  colors: {
    background: `#202020`,
    backgroundGray: "#c7c7c7",
    backgroundWhite: "#f4f4f4",
    primary: "#FF9900",
    cards: "255, 255, 255, 0.8",
    form: "48,48,48, 0.9",
    text: {
      white: {
        light: "#D7D7D7",
      },
      gray: {
        light: "#2E2E2E",
        medium: "#484848",
        bold: "#363636",
        inter: "#303030",
      },

      primary: "#FF9900",
    },
  },

  fontSize: {
    title: "3em",
    subtitle: "2.25",
    text: "1em",
    subText: "0.875em",
  },

  fontWeight: {
    heavy: "700",
    bold: "600",
    semiBold: "500",
    medium: "400",
    light: "100",
  },
  radius: {
    small: "4px",
    normal: "8px",
    great: "16px",
  },
};

export default theme;
