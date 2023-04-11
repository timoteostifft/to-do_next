import colors from "@/styles/colors";

type Theme = {
  default: "purple" | "red" | "green";
  colors: typeof colors;
};

const theme: Theme = {
  default: "purple",
  colors,
};

export default theme;
