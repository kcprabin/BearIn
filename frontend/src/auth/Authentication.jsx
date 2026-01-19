import React, { useState } from 'react'
import { AuthContext } from './auth'
import { API } from '../../api';
const Authentication = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(false);

    const Login=async({email,password})=>{
                const res=await fetch(`${API}/login`,{
                    method:"POST",
                    credentials:"include",
                    headers:{
                        'Content-type':'application/json'
                    },
                    body:JSON.stringify({email,password})
                });

                if (!res.ok){
                    console.error("login failed");
                }
                 return await checkauth();
               
    }

    const checkauth=async()=>{
        const res=await fetch(`${API}/me`,{
            method:'GET',
            credentials:true
        });
        if(res.status==401){
            console.error("something went wrong");
            setUser(null);
        }else{
            const data=res.json()
            setUser(data);
            setLoading(true);
            
        }
    }

    const Logout=async()=>{
        fetch(`${API}/logout`,{
            method:'POST',
            credentials:true
        });
        setUser(null);
    }


  return (
    <AuthContext.Provider value={{user,Login,checkauth,loading,Logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export default Authentication
