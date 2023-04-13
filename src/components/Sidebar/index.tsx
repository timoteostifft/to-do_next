import { motion } from "framer-motion";
import { SidebarContainer } from "./styles";

import { TbArrowBarToLeft } from "react-icons/tb";
import { FcCalendar, FcPackage, FcCloseUpMode } from "react-icons/fc";
import Item from "./Item";

interface Props {
  handleSetIsSidebarOpen: () => void;
  handleSetTheme: (main: "purple" | "red" | "green") => void;
}

export default function Sidebar({ handleSetIsSidebarOpen }: Props) {
  return (
    <SidebarContainer>
      <header>
        <button onClick={() => handleSetIsSidebarOpen()}>
          <TbArrowBarToLeft size={28} />
        </button>
      </header>

      <motion.div
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      <Item name="Theme" icon={<FcCloseUpMode size={20} />} />

      <Item name="History" icon={<FcPackage size={20} />} />

      <Item name="Calendar" icon={<FcCalendar size={20} />} />
    </SidebarContainer>
  );
}
