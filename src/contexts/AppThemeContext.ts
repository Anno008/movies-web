import { createContext } from "react";

export type AppThemeVariants = "light" | "dark";
export type ThemeContextValue = {
  theme: AppThemeVariants;
  setTheme: (theme: AppThemeVariants) => void;
};
export default createContext<ThemeContextValue>({
  theme: "light",
  setTheme: () => null
});
