
type TextOwnProps<E extends React.ElementType>= {
    as?: E,
    children : React.ReactNode, 
    size? : 'sm' | 'md' | 'lg'
    color?: 'primary' | 'secondary'
} 

type TextProps<E extends React.ElementType> = TextOwnProps<E> & React.ComponentProps<E>

const Text = <E extends React.ElementType = 'div'>({as,size,color,children} : TextProps<E>) => {
    
    const Component = as || 'div'
  
    return(
        <Component className={`class-with-${size}-${color}`}>{children}</Component>
    )
}

export default Text