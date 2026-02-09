import React from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { baseURL } from "../../apicenterlize"

const Login = () => {
  axios.defaults.withCredentials = true
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

 const sendRequest = () => {
  setError("") // Clear previous errors
  axios.post(`${baseURL}/users/login`, { username, password }).then((res) => {
    if (res.status === 200) {
      navigate("/home")
    }
  }).catch((err) => {
    console.log(err)
    if (err.response) {
      // Server responded with error status
      if (err.response.status === 401 || err.response.status === 404) {
        setError("Invalid username or password")
      } else if (err.response.data?.message) {
        setError(err.response.data.message)
      } else {
        setError("Login failed. Please try again.")
      }
    } else if (err.request) {
      // Request made but no response
      setError("Cannot connect to server. Please check your connection.")
    } else {
      setError("An error occurred. Please try again.")
    }
  })
}
  const handleLogin = (e) => {
    e.preventDefault() 
    sendRequest()
  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-gray-800">
      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-8">
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>} 
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-amber-400 tracking-wide">
            BearIn
          </h1>
          <p className="text-gray-300 mt-2 text-sm">
            Sign in to your account
          </p>    
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <label className="text-2xs tracking-wide text-gray-400">
              Username :
            </label>
            <input
              type="text"
              placeholder="yourusername"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-black/50 text-white border border-white/20 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
              value={username} onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="text-2xs tracking-wide text-gray-400">
              Password :
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-black/50 text-white border border-white/20 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
              value={password} onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="mt-2 py-2.5 rounded-lg bg-amber-400 text-black font-bold tracking-wide hover:bg-amber-300 active:scale-[0.98] transition-all cursor-pointer" onClick={handleLogin}>
            Sign In
          </button>

          <div className="text-center text-sm text-gray-400">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-amber-400 font-semibold cursor-pointer hover:underline"
            >
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
