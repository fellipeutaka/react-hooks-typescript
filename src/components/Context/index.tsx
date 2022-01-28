import { createContext, useState } from "react";
import Content from "./Content";
import { Container } from "./styles";
import Switch from "./Switch";

interface Theme {
  currentTheme: "dark" | "light";
  setTheme?(): void;
}

export const ThemeContext = createContext<Theme>({ currentTheme: "dark" });

export default function Context() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");
  return (
    <ThemeContext.Provider
      value={{ currentTheme: theme, setTheme: toggleTheme }}
    >
      <Container>
        <Content />
        <Switch />
      </Container>
    </ThemeContext.Provider>
  );
}
