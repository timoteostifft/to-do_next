import Theme from "@/@types/theme";
import colors from "@/styles/colors";
import { createContext, ReactNode, useState } from "react";

interface ThemeContextType {
  theme: Theme;
  handleSetTheme: (color: "purple" | "red" | "green") => void;
}

export const ThemeContext = createContext({} as ThemeContextType);

interface Props {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState<Theme>({
    main: "purple",
    colors,
  });

  function handleSetTheme(color: "purple" | "red" | "green") {
    setTheme((prevState) => {
      return {
        ...prevState,
        main: color,
      };
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
