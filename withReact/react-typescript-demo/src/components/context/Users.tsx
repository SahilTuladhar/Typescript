import { useContext } from "react";
import { UserContext } from "./UserContext";

const Users = () => {

    const userContext = useContext(UserContext)
  
    const loginHandler = () => {
      userContext?.setUser({
        id : 1,
        name: 'Sahil',
        city: "Kathmandu"
      })
    }
  
    const logoutHandler = () => {
      userContext?.setUser(null)
    }
  
    return (
      <> 
      <h1> Hi , {userContext?.user?.name} </h1>
      <h1> how is the weather in , {userContext?.user?.city} </h1>
      <button onClick={loginHandler}>Log In </button>
      <button onClick ={logoutHandler}> Log Out </button>
      </>
      
    );
  }
  
  export default Users