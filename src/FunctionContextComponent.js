import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";
import { ThemeContext } from "./App";
export default function FunctionContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const ThemeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={ThemeStyles}>Function Theme</div>
    </div>
  );
}
