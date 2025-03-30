export type ProfileProp = { 
    name : string
    setIsLoggedIn : React.Dispatch<React.SetStateAction<boolean>>
}


const Profile = ({name , setIsLoggedIn} : ProfileProp) => {
 return (
    <> 
    <h1> Hey {name}, its been long since we have seen you</h1>
    <button onClick={() => {
        setIsLoggedIn(false)
    }}>Log Out</button>
    </>
 )
}

export default Profile