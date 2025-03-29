import { useEffect, useState } from "react"
import axios , {AxiosResponse} from 'axios'
import { log } from "console"

type AuthUser = {
    id : number, 
    name : string,
    city : string
}


const User = () => {

    const [user , setUser] = useState<null | AuthUser>(null)
    const [inData , setInData] =useState<AuthUser[]>([])

    useEffect(() => {
        axios
        .get<AuthUser[]>('https://mocki.io/v1/8f6c278b-8526-46b1-8c80-7e16af88159e ')
        .then((res: AxiosResponse<AuthUser[]>) => {
            setInData(res.data)
            console.log(inData);
            
        })
        .catch(err => console.log(err))
    } , [])

    const handleLogIn = () => {
        setUser(inData[1])
        console.log('log in clicked');
        
     }
 
     const handleLogOut = () => {
       setUser(null)
     }

     return( 
        <>
        <h1>Welcome, {user?.name}</h1>
        <h1>how is the weather in {user?.city}</h1>
         <button onClick={handleLogIn}>Log In</button>
         <button onClick={handleLogOut}>Log Out</button>
        </>
    )

}

export default User