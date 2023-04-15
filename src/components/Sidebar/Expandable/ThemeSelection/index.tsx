import useTheme from "@/hooks/useTheme";
import { ThemeSelectionContainer } from "./styles";

export default function ThemeSelection() {
  const { handleSetTheme } = useTheme();

  return (
    <ThemeSelectionContainer>
      <button onClick={() => handleSetTheme("purple")} />
      <button onClick={() => handleSetTheme("green")} />
      <button onClick={() => handleSetTheme("red")} />
    </ThemeSelectionContainer>
  );
}
