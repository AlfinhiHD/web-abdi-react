// ProfilePage.js

import React, { useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import './ProfilePage.css';
import { dummyUserData } from '../dummy/dummyData';
import { Link } from 'react-router-dom';

const ProfilePage = () => {

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
                <div className="ProfileData">
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
                    <div className="ProfileDataColumn">
                        <label>Weight:</label>
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
            </div>
            <Footer />
        </>
    );
};

export default ProfilePage;
