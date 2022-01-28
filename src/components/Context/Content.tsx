import { useContext } from "react";
import { ThemeContext } from ".";

export default function Content() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <div>
      <span>Current theme: {currentTheme}</span>
    </div>
  );
}
