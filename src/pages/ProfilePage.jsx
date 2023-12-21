// ProfilePage.js

import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import './ProfilePage.css';
import { dummyUserData } from '../dummy/dummyData';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  // Calculate BMI
  const calculateBMI = () => {
    const weight = parseFloat(dummyUserData.weight);
    const height = parseFloat(dummyUserData.height) / 100; // Convert height to meters
    const bmi = weight / (height * height);
    return bmi.toFixed(2);
  };

  return (
    <>
      <Navbar />
      <div className="ContainerProfile">
        <div className="ProfileHeader">
          <h1>Profile</h1>
          <Link to="/ProfileEdit" className="EditLink">
            Edit Profile
          </Link>
        </div>
        <div className="ProfileData row">
          <div className="col-6">
            <div className="ProfileDataColumn">
              <label>Name:</label>
              <p>{dummyUserData.name}</p>
            </div>
            <div className="ProfileDataColumn">
              <label>Age:</label>
              <p>{dummyUserData.age}</p>
            </div>
            <div className="ProfileDataColumn">
              <label>Gender:</label>
              <p>{dummyUserData.gender}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="ProfileDataColumn">
              <label >Weight:</label>
              <p>{dummyUserData.weight}</p>
            </div>
            <div className="ProfileDataColumn">
              <label>Height:</label>
              <p>{dummyUserData.height}</p>
            </div>
            <div className="ProfileDataColumn">
              <label>Activity Level:</label>
              <p>{dummyUserData.activity}</p>
            </div>
          </div>

          <h3 className="text-center">BMI Anda: {calculateBMI()}</h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
