import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const COLOR_THEMES_ARRAY = ["light", "dark"] as const;
export type ColorThemes = typeof COLOR_THEMES_ARRAY[number];

interface ColorThemeValues {
  theme: string,
  setTheme: React.Dispatch<React.SetStateAction<ColorThemes>>
}

export const ColorThemeContext = createContext<ColorThemeValues | undefined>(undefined);

/**
 * Analiza el tema preferido del usuario y lo devuelve en formato string
 * @returns "light" | "dark" dependiendo de tu preffered-color-scheme
 */
const getPreferredTheme = (): ColorThemes => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  return isDark
    ? COLOR_THEMES_ARRAY[1] // "dark"
    : COLOR_THEMES_ARRAY[0] // "light"
}

export const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ColorThemes>(getPreferredTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(COLOR_THEMES_ARRAY[0], COLOR_THEMES_ARRAY[1]);
    root.classList.add(theme);
  }, [theme]);

  return (
    <>
      <ColorThemeContext value={{ theme, setTheme }}>
        {children}
      </ColorThemeContext>
    </>
  )
}

export const useTheme = (): ColorThemeValues => {
  const context = useContext(ColorThemeContext);

  if (context == undefined) {
    throw new Error("'ColorThemeContext' debe ser utilizado dentro del 'ColorThemeProvider'")
  }

  return context;
}