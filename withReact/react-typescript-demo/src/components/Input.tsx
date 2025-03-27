import { useState } from "react"

type  inputProps = {
    value : string
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}



const Inputs = (props : inputProps) => {
   
 return(
    <>
    <input value={props.value} onChange={(event) => (props.handleChange(event))}/>
    </>
 )
}

export default Inputs