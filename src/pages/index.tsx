import Header from "@/components/Tasks/Header";
import { HomeContainer } from "@/styles/pages/home";
import React, { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState<"all" | "undone">("all");

  function handleSetFilter(filter: "all" | "undone") {
    setFilter(filter);
  }

  return (
    <HomeContainer>
      <Header selected={filter} handleSetFilter={handleSetFilter} />
    </HomeContainer>
  );
}
