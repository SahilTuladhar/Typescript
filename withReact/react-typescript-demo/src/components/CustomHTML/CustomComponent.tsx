import Greet from "../Greet"

const CustomComponent = ({name , numMessage , isLoggedIn} : React.ComponentProps<typeof Greet>) => {
  
    return(
      <div>
     {name}
      </div>
    ) 
}

export default CustomComponent