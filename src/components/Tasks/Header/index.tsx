import React from "react";
import { HeaderContainer, Button } from "./styles";

interface Props {
  selected: "all" | "undone";
  handleSetFilter: (filter: "all" | "undone") => void;
}

export default function Header({ selected, handleSetFilter }: Props) {
  return (
    <HeaderContainer>
      <Button
        selected={selected === "all"}
        onClick={() => handleSetFilter("all")}
      >
        <span>All tasks</span>
      </Button>

      <Button
        selected={selected === "undone"}
        onClick={() => handleSetFilter("undone")}
      >
        <span>Undone</span>
      </Button>
    </HeaderContainer>
  );
}
