import useTheme from "@/hooks/useTheme";
import { animate, motion } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface Props {
  children: ReactNode;
}

const MotionFramerWrapper = ({ children }: Props) => {
  const { theme } = useTheme();

  useEffect(() => {
    animate("#element", { opacity: [0.2, 1] });
  }, [theme.main]);

  return <motion.div id="element">{children}</motion.div>;
};

export default MotionFramerWrapper;
