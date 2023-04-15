import { motion } from "framer-motion";
import { SidebarContainer } from "./styles";

import { TbArrowBarToLeft } from "react-icons/tb";
import { FcCalendar, FcPackage, FcCloseUpMode } from "react-icons/fc";

import Item from "./Item";
import ThemeSelection from "./Expandable/ThemeSelection";
import History from "../Modals/History";

interface Props {
  handleSetIsSidebarOpen: () => void;
}

export default function Sidebar({ handleSetIsSidebarOpen }: Props) {
  return (
    <SidebarContainer>
      <header>
        <button onClick={() => handleSetIsSidebarOpen()}>
          <TbArrowBarToLeft size={28} />
        </button>
      </header>

      <Item
        name="Theme"
        children={<ThemeSelection />}
        icon={<FcCloseUpMode size={20} />}
        isExpandable={true}
      />

      <Item
        name="History"
        children={<History />}
        icon={<FcPackage size={20} />}
      />

      <Item
        name="Calendar"
        children={<History />}
        icon={<FcCalendar size={20} />}
      />
    </SidebarContainer>
  );
}
