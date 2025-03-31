
type HorizontalType = 'left' | 'center' | 'right'
type VerticalType = 'top' | 'center' | 'bottom'

type ToastProps = {
    position : Exclude<`${HorizontalType}-${VerticalType}` , 'center-center'> | 'center'
}

const Toast = ({position} : ToastProps) => {

     return ( 
        <> 
          <h1>Toast Notification Position : {position}</h1>
        </>
     )
}

export default Toast