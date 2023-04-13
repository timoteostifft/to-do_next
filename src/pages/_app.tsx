import React, { useState } from "react";
import type { AppProps } from "next/app";
import { AppContainer, AppHeader } from "@/styles/pages/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "@/styles/global";

import Image from "next/image";
import profile from "@/assets/profile.jpg";

import { HiBars3BottomLeft } from "react-icons/hi2";
import Day from "@/components/Callendar/Day";
import Add from "@/components/Tasks/Add";
import Sidebar from "@/components/Sidebar";
import Theme from "@/@types/theme";
import colors from "@/styles/colors";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function handleSetIsSideBarOpen() {
    setIsSideBarOpen(!isSideBarOpen);
  }

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
    <ThemeProvider theme={theme}>
      <AppContainer>
        <GlobalStyle />
        <AppHeader>
          <div>
            <button onClick={() => handleSetIsSideBarOpen()}>
              <HiBars3BottomLeft size={28} />
            </button>
            <Image src={profile} height={80} width={80} alt="" />
          </div>

          <div>
            <h2>To-do List</h2>
            <Day />
          </div>
        </AppHeader>

        <Add />
        <Component {...pageProps} />
      </AppContainer>
      <motion.div
        animate={{ x: isSideBarOpen ? -400 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <Sidebar
          handleSetIsSidebarOpen={handleSetIsSideBarOpen}
          handleSetTheme={handleSetTheme}
        />
      </motion.div>
    </ThemeProvider>
  );
}
