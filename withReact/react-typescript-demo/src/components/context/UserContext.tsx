import { createContext, useEffect, useState } from "react"
import axios , {AxiosResponse} from "axios"

type AuthUser = {
    id : number,
    name : string,
    city : string
}

type UserContextProviderProps = {
    children : React.ReactNode
}

type UseContextProps ={
    user : AuthUser | null
    setUser : React.Dispatch<React.SetStateAction<AuthUser | null>>
    
}



export const UserContext = createContext<UseContextProps | null>(null)

const UserContextProvider = ({children} : UserContextProviderProps ) => {
   const [user , setUser] = useState<AuthUser | null>(null)
 
   

   return(
    <UserContext.Provider value={{user , setUser}}> {children}</UserContext.Provider>
   )
}

export default UserContextProvider