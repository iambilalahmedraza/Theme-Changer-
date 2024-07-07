import { useContext,createContext } from "react";

const ThemeContext = createContext({
    themeMode:"light",
    darkMode:()=>{},
    lightMode:()=>{}
})

export const Themeprovider = ThemeContext.Provider

export default function UseTheme(){
    return useContext(ThemeContext)
}