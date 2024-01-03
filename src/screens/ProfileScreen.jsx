import React from 'react';
import Meta from '../components/Meta';
import { useSelector } from 'react-redux';
import userIcon from '../assets/images/user-2.png'


const ProfileScreen = () => {
    const { authInfo } = useSelector((state) => state.auth);

 
  return (
    <div className="min-h-screen  flex items-center justify-center">
                     <Meta />

      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        {/* User Info */}
        <div className="flex items-center mb-6">
          <img
            src={userIcon} // Replace with the user's avatar URL
            alt="User Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h1 className="text-2xl font-semibold">{authInfo.user.name}</h1>
            <p className="text-gray-500">{authInfo.user.email}</p>
          </div>
        </div>

        {/* Subscription Status */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Subscription Status</h2>
          {authInfo.user.subscribed === 5 ? (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-green-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-green-500">Subscribed to the course</span>
            </div>
          ) : (
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-red-500 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="text-red-500">Not subscribed to the course</span>
            </div>
          )}
        </div>

        {/* Additional Profile Details */}
        {/* Add any additional details you want to display on the profile page */}

        {/* Edit Profile Button */}
       
      </div>
    </div>
  );
};

export default ProfileScreen;
