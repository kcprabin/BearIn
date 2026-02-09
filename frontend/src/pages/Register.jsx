import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { baseURL } from "../../apicenterlize"   

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [error, setError] = useState("")

    const navigate = useNavigate()  
    const sendRequest = () => { 
        setError("")
        axios.post(`${baseURL}/users/register`, { username, email, password }).then((res) => {
            if (res.status === 201) {
                navigate("/login")
            }
        }).catch((err) => {
            console.log(err)
            if (err.response) {
                if (err.response.data?.message) {
                    setError(err.response.data.message)
                } else {
                    setError("Registration failed. Please try again.")
                }
            } else if (err.request) {
                setError("Cannot connect to server. Please check your connection.")
            } else {
                setError("An error occurred. Please try again.")
            }
        })
    }
    const handleRegister = (e) => {
        e.preventDefault()
        sendRequest()   
    }
  return (
    <div>
     <h1 className='text-amber-300'>register</h1>
    </div>
  )
}

export default Register
