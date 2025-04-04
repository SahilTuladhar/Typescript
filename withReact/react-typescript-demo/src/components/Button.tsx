type buttonProps = {
    handleClick : (event:React.MouseEvent<HTMLButtonElement> , id : number) => void
}

const Button = (props : buttonProps) => {
 return(
    <button onClick={(event) => (props.handleClick(event , 1))}> Click me</button>
 )
}

export default Button