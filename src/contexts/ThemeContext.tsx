import Theme from "@/@types/theme";
import colors from "@/styles/colors";
import { createContext, ReactNode, useEffect, useState } from "react";

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
    colors
  });

  function handleSetTheme(color: "purple" | "red" | "green") {
    if (typeof window !== 'undefined') {
      localStorage.setItem('@to-do_next:theme', color)
    }
    setTheme((prevState) => {
      return {
        ...prevState,
        main: color,
      };
    });
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
     setTheme({
      main: localStorage.getItem('@to-do_next:theme') as Theme["main"] ?? "purple",
      colors,
    }) 
    }
  }, [])


  return (
    <ThemeContext.Provider value={{ theme, handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
