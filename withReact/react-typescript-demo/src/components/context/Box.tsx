import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

const Box = () => {

    const theme = useContext(ThemeContext)

    return(
        <> 
        <div style ={{
            backgroundColor : theme.primary.main,
            color : theme.primary.text
        }}>
            This Component is Primary Component
        </div>

        <div style ={{
            backgroundColor : theme.secondary.main,
            color : theme.secondary.text
        }}>
            This Component is the secondary Compoenet
        </div>
        </>
    )

}

export default Box