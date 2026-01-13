import React from 'react'
import {useNavigate} from "react-router-dom"

const Login = () => {
    const navigate=useNavigate();
  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Login
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="px-4 py-2 rounded-lg bg-black/40 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="px-4 py-2 rounded-lg bg-black/40 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <button className="mt-4 py-2 rounded-lg bg-amber-400 text-black font-semibold hover:bg-amber-300 transition">
            Sign In
          </button>

          <p className="text-center text-sm text-gray-400 mt-2">
            Don’t have an account? <span className="text-amber-400 cursor-pointer"onClick={()=>{navigate("/register")}}>Register</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
