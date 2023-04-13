import colors from "@/styles/colors";

type Theme = {
  main: "purple" | "red" | "green";
  colors: typeof colors;
};

export default Theme;
