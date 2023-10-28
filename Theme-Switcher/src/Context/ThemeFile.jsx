import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// eslint-disable-next-line react-refresh/only-export-components
export default function useTheme(){
    return useContext(ThemeContext)
}