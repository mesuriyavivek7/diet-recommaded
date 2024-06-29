import React from 'react';

const UserProfile = () => {
  // Define static profile details
  const profileDetails = {
    age: 30,
    weight: 70,
    height: 175,
    gender: 'Male',
  };

  const profilePic = 'https://1.bp.blogspot.com/-Bz6uidKEVWU/X82ZqzXuvyI/AAAAAAAAlEo/Xs-XBR57BnUgTSrAICVLUV4XA-_iuiUyQCLcBGAsYHQ/s1024/Virat.png'; // Replace with actual path

  // Destructure profileDetails
  const { age, weight, height, gender } = profileDetails;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
