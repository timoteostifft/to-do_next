import React from "react";
import type { AppProps } from "next/app";
import { AppContainer, AppHeader } from "@/styles/pages/app";

import GlobalStyle from "@/styles/global";

import Image from "next/image";
import profile from "@/assets/profile.jpg";

import { HiBars3BottomLeft } from "react-icons/hi2";
import Day from "@/components/Callendar/Day";
import Add from "@/components/Tasks/Add";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
      <GlobalStyle />
      <AppHeader>
        <div>
          <HiBars3BottomLeft size={28} />
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
  );
}
