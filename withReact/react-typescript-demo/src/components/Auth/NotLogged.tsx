type NotLoggedProps = {
  setIsLoggedIn : React.Dispatch<React.SetStateAction<boolean>>
}

const NotLogged = ({setIsLoggedIn} : NotLoggedProps) => {
  return (
   <>
     <h1> Please Log in to Continue</h1>
     <button onClick={ () => {
      setIsLoggedIn(true)
     }}>Log In</button>
   </>

  )
}

export default NotLogged