import React, { ReactNode } from "react";
import { ItemContainer } from "./styles";

interface Props {
  name: string;
  icon: ReactNode;
}

export default function Item({ name, icon }: Props) {
  return (
    <ItemContainer>
      {icon}
      <span>{name}</span>
    </ItemContainer>
  );
}
