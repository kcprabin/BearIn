import { useState } from "react"

const authContext = ()=>{
    const [login,setLogin] = useState(null)
    const [userId,setuserId] = useState(null)


    if(login) return setLogin(true)

}