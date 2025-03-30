import { ProfileProp } from "./Profile"
import NotLogged from "./NotLogged"


type PageProps = {
    isLoggedIn : boolean,
    setIsLoggedIn : React.Dispatch<React.SetStateAction<boolean>>
    component : React.ComponentType<ProfileProp>
}

const Page = ({isLoggedIn , setIsLoggedIn,  component : Component} : PageProps) => {

     return(
      <> 
        {
            isLoggedIn?
            <Component setIsLoggedIn = {setIsLoggedIn} name="Sahil"/>:
            <NotLogged setIsLoggedIn={setIsLoggedIn}/>
        }
      </>

     )
}


export default Page
