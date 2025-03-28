import { useState } from "react"

type  inputProps = {
    value : string
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}



const Inputs = ({value , handleChange} : inputProps) => {
   
 return(
    <>
    <input value={value} onChange={(event) => (handleChange(event))}/>
    </>
 )
}

export default Inputs