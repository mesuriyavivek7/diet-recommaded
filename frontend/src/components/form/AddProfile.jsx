import React from 'react';

import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

import { useState } from 'react';
const AddProfile = () => {

    const {user,dispatch}=useContext(AuthContext)



    const navigate=useNavigate()


    const [credential,setCredential]=useState({
    })

    const [error,setError]=useState(null)

    const [gender,setGender]=useState(null)
    const [dietary,setdietary]=useState(null)
    const [healthgoal,setHealthgoal]=useState(null)

    const handleChange=(e)=>{
         setCredential((prev)=>({...prev,[e.target.id]:e.target.value}))
         console.log(credential)
    }
    const handleClick=(e)=>{
         if(e.target.id==='dietary_select_veg'){
            setdietary("vegetarian")
         }else if(e.target.id==='dietary_select_non_veg'){
            setdietary("non-vegetarian")
         }else if(e.target.id==='health_goals_main'){
            setHealthgoal('maintain')
         }else if(e.target.id==='health_goals_lose'){
            setHealthgoal('lose')
         }else if(e.target.id==='health_goals_gain'){
            setHealthgoal('gain')
         }
         
    }

    const handleSubmit=async()=>{
        if(gender!==null){
            credential['gender']=gender
        }

        if(dietary!==null){
            credential['dietary_select']=dietary
        }

        if(healthgoal!==null){
            credential['health_goals']=healthgoal
        }


        try{
            await axios.put(`/auth/update/${user._id}`,credential)
            const res=await axios.get(`/auth/${user._id}`)
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            navigate('/profile')


        }catch(err){
            console.log(err)
            setError("There is something wrong...!")
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Add Profile
            </h2>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    
                        <div className="mt-4">
                            <label htmlFor="age" className="block text-sm font-medium leading-5 text-gray-700">Age</label>
                            <input onChange={handleChange} id="age" name="age" type="number" placeholder="Enter your age" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="weight" className="block text-sm font-medium leading-5 text-gray-700">Weight (kg)</label>
                            <input onChange={handleChange} id="weight" name="weight" type="number" placeholder="Enter your weight" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>

                        <div className="mt-4">
                            <label htmlFor="height" className="block text-sm font-medium leading-5 text-gray-700">Height (cm)</label>
                            <input onChange={handleChange} id="height" name="height" type="number" placeholder="Enter your height" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>
                        <div className="mt-4">
                            <label htmlFor="gender" className="block text-sm font-medium leading-5 text-gray-700">Gender</label>
                            <select onChange={handleChange} id="gender" name="gender" className="form-select mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                                <option value="">Select your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mt-4">
                            <label className="block text-sm font-medium leading-5 text-gray-700">Dietary Preferences</label>
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input onClick={handleClick} id='dietary_select_veg' type="checkbox"  className="form-checkbox h-5 w-5 text-blue-600" />
                                    <span className="ml-2 text-sm text-gray-700">Vegetarian</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input onClick={handleClick} id='dietary_select_non_veg' type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                                    <span className="ml-2 text-sm text-gray-700">Non-Vegetarian</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label htmlFor="allergies" className="block text-sm font-medium leading-5 text-gray-700">Allergies</label>
                            <input onChange={handleChange} id="allergies" name="allergies" type="text" placeholder="List any allergies" className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                        </div>

                        <div className="mt-4">
                            <label className="block text-sm font-medium leading-5 text-gray-700">Health Goals</label>
                            <div className="mt-2">
                                <label className="inline-flex items-center">
                                    <input onClick={handleClick} id='health_goals_main' type="radio" name="health_goal" className="form-radio h-5 w-5 text-blue-600" value="maintain" />
                                    <span className="ml-2 text-sm text-gray-700">Maintain</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input onClick={handleClick} id='health_goals_lose' type="radio" name="health_goal" className="form-radio h-5 w-5 text-blue-600" value="lose" />
                                    <span className="ml-2 text-sm text-gray-700">Lose Weight</span>
                                </label>
                                <label className="inline-flex items-center ml-6">
                                    <input onClick={handleClick} id='health_goals_gain' type="radio" name="health_goal" className="form-radio h-5 w-5 text-blue-600" value="gain" />
                                    <span className="ml-2 text-sm text-gray-700">Gain Weight</span>
                                </label>
                            </div>
                        </div>

                        <div className="mt-6">
                            <span className="block w-full rounded-md shadow-sm">
                                <button onClick={handleSubmit} className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                    Make Profile
                                </button>
                            </span>
                        </div>
                       {error && <span>{error}</span>}
                </div>
            </div>
        </div>
    );
}

export default AddProfile;