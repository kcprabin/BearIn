import { useState, createContext } from "react"

const authContext = createContext();

const AuthProvider = ({children})=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [userid , setUserid] = useState(null)

    const login = () => {
        setIsAuthenticated(true)
        setUserid(userid)
    }

    const logout = () => {
        setIsAuthenticated(false)
        setUserid(null)
    }

    return (
        <authContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </authContext.Provider>
    )
}
export { AuthProvider, authContext };   