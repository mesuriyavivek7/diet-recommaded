import React, { useState,useContext } from "react";
import "./login.css";

import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

import {Link} from 'react-router-dom'

export default function Login() {
  const navigate=useNavigate()
  const [credential,setCreantials]=useState({
    email:undefined,
    password:undefined
  })
  const {dispatch,loading}=useContext(AuthContext)

  const handleChange=(e)=>{
    setCreantials((prev)=>({...prev,[e.target.id]:e.target.value}))
    console.log(credential)
  }

  const handleClick=async ()=>{
    dispatch({type:"LOGIN_START"})
    console.log("clicked...")
    try{
        const res=await axios.post('/auth/login',credential)
        console.log(res)
        dispatch({type:"LOGIN_SUCCESS",payload:res.data.details})
        navigate('/')
        
    }catch(err){
       console.log(err)
    }
  }
  return (
    <section className="dark:bg-green-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white logo"
        >
          Nutri Guide
        </a>

        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 mb-4">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Sign in to your account
            </h1>
            
              <div className="space-y-4 md:space-y-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email or username
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="name@company.com or username"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  required
                />
            </div>
              <button
                onClick={handleClick}
                className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>
              <p className="text-sm font-light text-gray-500">
                Don’t have an account yet?{" "}
                <Link to='/register'>
                <a
                  href="##"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Sign up
                </a>
                </Link>
              </p>
          
          </div>
        </div>
      </div>
    </section>
  );
}
