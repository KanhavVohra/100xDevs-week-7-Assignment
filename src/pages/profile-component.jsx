import React, { useState } from 'react';
import Navbar from '../components/navbar';

import backgroundIcon from '/assests/bermuda-traingle.svg'
import profileIcon from '/assests/user-profile-icon.svg'

function Profile() {
  const [profileData, setProfileData] = useState({
    name: 'Rita Correia',
    age: '32',
    location: 'London',
    followers: '80K',
    likes: '803K',
    photos: '1.4K',
    
  });

  const generateRandomUser = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();

      const randomUserData = {
        name: `${data.results[0].name.first} ${data.results[0].name.last}`,
        age: data.results[0].dob.age,
        location: `${data.results[0].location.city}, ${data.results[0].location.country}`,
        followers: Math.floor(Math.random() * 100000),
        likes: Math.floor(Math.random() * 1000000),
        photos: Math.floor(Math.random() * 2000),
        profilePic: data.results[0].picture.large,
      };

      setProfileData(randomUserData);
    } catch (error) {
      console.error('Error fetching random user data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-md mx-auto mt-8 relative rounded-md shadow-md">
        <div
        className='h-32 bg-cover bg-center  rounded-t-md' 
        style={{backgroundImage:`url(${backgroundIcon})`}}/>
        
        <div className="p-6 bg-white rounded-b-md shadow-md relative">
          <div className="text-center">
            <img
              className="w-1/4 h-2/4 mx-auto mb-4 rounded-full border-4 bg-slate-100 border-white absolute -top-12 left-1/2 transform -translate-x-1/2 "
              src={profileData.profilePic || profileIcon}
              alt={profileData.name + "'s profile picture"}
            />
            <h3 className="text-xl mt-10 pt-2">
              {profileData.name} <strong>{profileData.age}</strong>
            </h3>
            <h4 className="text-gray-500">{profileData.location}</h4>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <div className="text-center">
              <h3 className="text-2xl font-semibold">{profileData.followers}</h3>
              <h4 className="text-gray-500">Followers</h4>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">{profileData.likes}</h3>
              <h4 className="text-gray-500">Likes</h4>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold">{profileData.photos}</h3>
              <h4 className="text-gray-500">Photos</h4>
            </div>
          </div>
        </div>
      </div>
      <button
        className="mt-4 mx-auto block px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-md"
        onClick={generateRandomUser}
      >
        Generate Random User
      </button>
    </div>
  );
}

export default Profile;