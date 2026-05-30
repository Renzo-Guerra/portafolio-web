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
    <button
      className="switch-wrap"
      type="button"
      onClick={toggleTheme}
      aria-label={isLight() ? "Activar modo oscuro" : "Activar modo claro"}
    >
      <div className={`switch-track ${isLight() ? "light" : "dark"}`}>
        <div className="switch-thumb" />
      </div>
      <span className="switch-label">
        Dark mode
      </span>
    </button>
  );
}