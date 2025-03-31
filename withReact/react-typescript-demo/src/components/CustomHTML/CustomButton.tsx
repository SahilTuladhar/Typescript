import styles from './CustomButton.module.css'

type CustomButtonProps = {
    variant : 'primary' | 'secondary'
    children : string
} & Omit<React.ComponentProps<'button'> , 'children'>

const CustomButton = ({variant , children , ...rest} : CustomButtonProps) => {
     
    const buttonClass = variant==='primary' ? styles['button-primary'] : styles['button-secondary']
    
    return(
        <button className={buttonClass} {...rest}>{children}</button>
    )
}

export default CustomButton