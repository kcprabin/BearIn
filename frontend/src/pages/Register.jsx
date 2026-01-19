import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { API } from '../../api';

const Register = () => {
  const navigate = useNavigate();
  const [Username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const register=async(Username,email,password)=>{
    const res=fetch(`${API}/register`,{
      method:'POST',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify({Username,email,password})
    });

    if(!res.ok){
      console.error("registration failed");
    }
    navigate('/');

  }

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-gray-800">
      <div className="w-full max-w-md rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-8">
        
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-amber-400 tracking-wide">
            BearIn
          </h1>
          <p className="text-gray-300 mt-2 text-md">
            Create your account
          </p>
        </div>

        <div className="flex flex-col gap-5">

           <div>
            <label className="text-sm tracking-wide text-gray-300">
              Username :
            </label>
            <input
              type="text"
              placeholder="Username"
              value={Username}
              onChange={(e)=>setUsername(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-lg bg-black/50 text-white border border-white/20 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>


          <div>
            <label className="text-sm tracking-wide text-gray-300">
              Email :
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-lg bg-black/50 text-white border border-white/20 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <div>
            <label className="text-sm tracking-wide text-gray-300">
              Password :
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-lg bg-black/50 text-white border border-white/20 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>

          
          <div>
            <label className="text-sm tracking-wide text-gray-300">
             Confirm Password :
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 rounded-lg bg-black/50 text-white border border-white/20 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
            />
          </div>

          <button className="mt-2 py-2.5 rounded-lg bg-amber-400 text-black font-bold tracking-wide hover:bg-amber-300 active:scale-[0.98] transition-all cursor-pointer" onClick={()=>{register(Username,email,password);}}>
            Sign Up
          </button>

          <div className="text-center text-sm text-gray-300">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-amber-400 font-semibold cursor-pointer hover:underline"
            >
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
