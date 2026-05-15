import { COLOR_THEMES_ARRAY, useTheme } from "../../context";

import "./themeToggle.css";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const isLight = () => (theme === COLOR_THEMES_ARRAY[0]);

  const toggleTheme = () => {
    const newTheme = isLight()
      ? COLOR_THEMES_ARRAY[1]
      : COLOR_THEMES_ARRAY[0];
    setTheme(newTheme);
  }


  return (
    <button className="btn" type="button" onClick={toggleTheme}>
      {isLight() ? "Dark" : "Light"} mode
    </button>
  )
}