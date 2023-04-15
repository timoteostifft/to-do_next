import { motion } from "framer-motion";
import React, { ReactNode, useState } from "react";
import { ItemContainer } from "./styles";

interface Props {
  name: string;
  icon: ReactNode;
  children: React.ReactNode;
  isExpandable?: true;
}

export default function Item({
  name,
  icon,
  children: Children,
  isExpandable,
}: Props) {
  const [expand, setExpand] = useState(false);

  return (
    <ItemContainer onClick={() => setExpand((prevState) => !prevState)}>
      <div>
        {icon}
        <span>{name}</span>
      </div>
      {expand &&
        (isExpandable ? (
          <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.26 }}
          >
            {Children}
          </motion.div>
        ) : (
          <>{Children}</>
        ))}
    </ItemContainer>
  );
}
