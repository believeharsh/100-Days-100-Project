// Context Api : Context api is used to pass global variables anywhere in the code. It helps
// when there is a need for sharing state between a lot of nested components. It is light in weight and easier to use, to create a context just need to call React.createContext().
// No need to install other dependencies or third party libraries like redux for state management.

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