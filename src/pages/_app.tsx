import React, { useContext, useState } from "react";
import type { AppProps } from "next/app";
import { AppContainer, AppHeader } from "@/styles/pages/app";

import GlobalStyle from "@/styles/global";

import Image from "next/image";
import profile from "@/assets/profile.jpg";

import { HiBars3BottomLeft } from "react-icons/hi2";
import Day from "@/components/Callendar/Day";
import Add from "@/components/Tasks/Add";
import Sidebar from "@/components/Sidebar";
import { motion } from "framer-motion";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import StyledComponentsThemeProvider from "@/HOCs/StyledComponentsThemeProvider";
import MotionFramerWrapper from "@/HOCs/MotionFramerWrapper";

export default function App({ Component, pageProps }: AppProps) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  function handleSetIsSideBarOpen() {
    setIsSideBarOpen(!isSideBarOpen);
  }

  return (
    <ThemeContextProvider>
      <StyledComponentsThemeProvider>
        <MotionFramerWrapper>
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
            <Sidebar handleSetIsSidebarOpen={handleSetIsSideBarOpen} />
          </motion.div>
        </MotionFramerWrapper>
      </StyledComponentsThemeProvider>
    </ThemeContextProvider>
  );
}
