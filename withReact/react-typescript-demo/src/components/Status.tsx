type statusProps = {
    status : 'success' | 'loading' | 'error'
}

const Status = (props : statusProps) => {

     const {status} = props
     
     let message 

     if(status === 'loading'){
        message = '.....loading'
     }else if(status === 'success'){
        message = 'Data fetched successfully'
     }else{
        message = 'Error fetching the data'
     }

     return(
       <>
        <h2> {message}</h2>
       </>
     )
}


export default Status