import { useContext } from "react";
import { UserContext2 } from "./UserContext2";

const Users2 = () => {

    const userContext = useContext(UserContext2)
  
 
  
    return (
      <> 
      <h1> Hi , {userContext.name} </h1>
      <h1> how is the weather in , {userContext.city} </h1>
  
      </>
      
    );
  }
  
  export default Users2