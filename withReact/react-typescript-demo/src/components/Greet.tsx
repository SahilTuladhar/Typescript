 import { useState } from "react"

type Greetprops = {
    name : string
    numMessage?: number
    isLoggedIn : boolean
}



const Greet  = (props: Greetprops) => {
  
  const {name , numMessage = 0, isLoggedIn} = props // by default value

  const [loggedIn , setLoggedIn] = useState(isLoggedIn)

  const loginHandler = () =>{
    if(loggedIn){
      setLoggedIn(false)
    }
    else{
      setLoggedIn(true)
    }
  }

  return(
    <> 
      {loggedIn 
      ? <div>
        <h1>`Hi {name} , you have {numMessage} messages`</h1>
        <button onClick={loginHandler}> Log out</button>
      </div>
      :<div>
       <h1>Yo have not logged in</h1>
      <button onClick={loginHandler}> Log In</button>
      
  </div>}
    </>
  )
}

export default Greet

