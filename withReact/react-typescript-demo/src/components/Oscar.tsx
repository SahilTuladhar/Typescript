import React from "react"

type oscarProps = {
    children : React.ReactNode
}

const Oscar = (props : oscarProps) =>{
  return (
  <>
    {props.children}
  </>
  )
  
}

export default Oscar