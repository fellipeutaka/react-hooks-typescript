import { useContext } from "react";
import { ThemeContext } from ".";

export default function Switch() {
  let { setTheme } = useContext(ThemeContext);
  return <button onClick={() => setTheme!()}>Toggle theme</button>;
}
