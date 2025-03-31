
type CustomInputProps = React.ComponentProps<'input'>

const CustomInput = ({ ...inputProps} : CustomInputProps) => {
 
    return(
        <> 
         <input type="text" {...inputProps} />
        </>
    )
}

export default CustomInput