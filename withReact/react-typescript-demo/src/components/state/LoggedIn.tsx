import { useState } from "react"

const LoggedIn = () => {

    const [loggedIn , setLoggedIn] = useState(false)

    const handleLogIn = () => {
       setLoggedIn(true)
    }

    const handleLogOut = () => {
       setLoggedIn(false)
    }
 
    return( 
        <>
         <h1>The User has {loggedIn ? 'Logged in' : 'logged Out'} </h1>
         <button onClick={handleLogIn}>Log In</button>
         <button onClick={handleLogOut}>Log Out</button>
        </>
    )
}

export default LoggedIn