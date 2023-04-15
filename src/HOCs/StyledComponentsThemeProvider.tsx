import useTheme from "@/hooks/useTheme";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface Props {
  children: ReactNode;
}

const StyledComponentsThemeProvider = ({ children }: Props) => {
  const { theme } = useTheme();

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledComponentsThemeProvider;
