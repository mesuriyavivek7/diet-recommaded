import React from 'react';
import { useState } from 'react';

import axios from 'axios'

import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

const SignUpForm = () => {
    const {dispatch}=useContext(AuthContext)
    const navigate=useNavigate()
    const [error,setError]=useState(null)
    const [credential,setCredential]=useState({
        username:null,
        email:null,
        password:null
    })

    const handlechange=(e)=>{

        setCredential((prev)=>({...prev,[e.target.id]:e.target.value}))
        console.log(credential)

    }

    const [confirmPassword,setConfirmPassword]=useState(null)

    const handleclick=async ()=>{

        if(confirmPassword!==credential.password){
            setError("confirmation password muts be same")
        }else{
        
            try{
                const res=await axios.post('/auth/register',credential)
                navigate('/login')
            }catch(err){
                setError("there is something wrong....!")
            }
            
        }
    }
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-10 w-auto" src="https://www.svgrepo.com/show/301692/login.svg" alt="Workflow" />
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Create a new account
                </h2>
                <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
                    Or &nbsp;
                    <Link to={'/login'}>
                    <a href="##"
                        className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"> 
                        login to your account
                    </a>
                    </Link>
                </p>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    
                       

                        <div className="mt-4">
                            <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">Username</label>
                            <div className="flex rounded-md shadow-sm">
                             
                                <input onChange={handlechange} id="username" name="username" placeholder="john" type="text" required className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">Email address</label>
                            <input onChange={handlechange} id="email" name="email" placeholder="user@example.com" type="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                       
                        <div className="mt-4">
                            <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">Password</label>
                            <input onChange={handlechange} id="password" name="password" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="password_confirmation" className="block text-sm font-medium leading-5 text-gray-700">Confirm Password</label>
                            <input onChange={(e)=>setConfirmPassword(e.target.value)} id="password_confirmation" name="password_confirmation" type="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>



                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button onClick={handleclick} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Create account
                                </button>
                            </span>
                        </div>

                      {error  && <span>{error}</span>}
                    
                </div>
            </div>
        </div>
    );
}

export default SignUpForm;
