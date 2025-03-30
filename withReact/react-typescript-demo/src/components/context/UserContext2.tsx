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





export const UserContext2 = createContext<AuthUser>({} as AuthUser)

const UserContextProvider2 = ({children} : UserContextProviderProps ) => {
   const [user , setUser] = useState<AuthUser | null>(null)
   const [inData , setInData] = useState<AuthUser[]>([])

   useEffect(()=>{
    axios
    .get<AuthUser[]>('https://mocki.io/v1/8f6c278b-8526-46b1-8c80-7e16af88159e ')
    .then((res : AxiosResponse<AuthUser[]>) => {
       setInData(res.data)
       console.log(inData);
       
    })
    .catch(err => console.log(err)
    )
   } , [])
   

   return(
    <UserContext2.Provider value = {inData[0]}> {children}</UserContext2.Provider>
   )
}

export default UserContextProvider2