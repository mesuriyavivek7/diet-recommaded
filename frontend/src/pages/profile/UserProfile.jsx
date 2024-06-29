import React from 'react';

import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  // Define static profile details
  
  const {user}=useContext(AuthContext)
  const profileDetails = {
    age: (user===null)?('none'):(user.age),
    weight: (user===null)?('none'):(user.weight),
    height: (user===null)?('none'):(user.height),
    gender: (user===null)?('none'):(user.gender),
  };

  const profilePic = 'https://1.bp.blogspot.com/-Bz6uidKEVWU/X82ZqzXuvyI/AAAAAAAAlEo/Xs-XBR57BnUgTSrAICVLUV4XA-_iuiUyQCLcBGAsYHQ/s1024/Virat.png'; // Replace with actual path

  // Destructure profileDetails
  const { age, weight, height, gender } = profileDetails;

  const handleEditProfile = () => {
    // Logic for handling edit profile action
    console.log('Edit Profile clicked');
  };

  const handleShowRecipes = () => {
    // Logic for handling show recipes action
    console.log('Show Recipes clicked');
  };
  


  return (
    <>
   <Navbar></Navbar>
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 relative">
          <Link to={'/addinfo'}>
          <button
            className="absolute top-0 left-0 mt-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-md text-sm"
            onClick={handleEditProfile}
          >
            Edit Profile
          </button>
          </Link>


          <div className="flex justify-center">
            <img
              className="h-32 w-32 rounded-full object-cover"
              src={profilePic}
              alt="Profile"
            />
          </div>
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            User Profile
          </h2>
          <dl className="mt-6 space-y-4">
            <div className="flex">
              <dt className="w-1/2 text-right text-sm font-medium text-gray-700">
                Age:
              </dt>
              <dd className="ml-2 text-sm text-gray-900">
                {age || 'N/A'}
              </dd>
            </div>
            <div className="flex">
              <dt className="w-1/2 text-right text-sm font-medium text-gray-700">
                Weight (kg):
              </dt>
              <dd className="ml-2 text-sm text-gray-900">
                {weight || 'N/A'}
              </dd>
            </div>
            <div className="flex">
              <dt className="w-1/2 text-right text-sm font-medium text-gray-700">
                Height (cm):
              </dt>
              <dd className="ml-2 text-sm text-gray-900">
                {height || 'N/A'}
              </dd>
            </div>
            <div className="flex">
              <dt className="w-1/2 text-right text-sm font-medium text-gray-700">
                Gender:
              </dt>
              <dd className="ml-2 text-sm text-gray-900">
                {gender || 'N/A'}
              </dd>
            </div>
          </dl>
          <button
            className="w-full mt-6 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md text-sm"
            onClick={handleShowRecipes}
          >
            Show Recommended Recipes
          </button>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

export default UserProfile;
