import React from "react"

type containerProps = {
    styles : React.CSSProperties
}

const Container = (props: containerProps) => {
  return(
    <div style = {props.styles}>
        <h1>This is the Container Block</h1>
    </div>
  )
}

export default Container