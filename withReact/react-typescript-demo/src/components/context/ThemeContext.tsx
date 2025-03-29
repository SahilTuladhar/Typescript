import { createContext } from "react";
import { Themes } from "./Theme";



type ThemeContextProps = {
    children : React.ReactNode
}

export const ThemeContext = createContext(Themes)

const ThemeContextProvider = ({children}: ThemeContextProps) => {

    return(
        <ThemeContext.Provider value = {Themes} >{children}</ThemeContext.Provider>
    );

}

export default ThemeContextProvider