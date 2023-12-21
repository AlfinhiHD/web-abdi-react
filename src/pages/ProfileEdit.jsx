import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ProfileEdit.css'
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/authSlice';
import { Navigate } from 'react-router-dom';
import { dummyUserData } from '../dummy/dummyData';


function ProfileEdit() {
    const [name, setName] = useState(dummyUserData.name);
    const [weight, setWeight] = useState(dummyUserData.weight);
    const [height, setHeight] = useState(dummyUserData.height);
    const [age, setAge] = useState(dummyUserData.age);
    const [activity, setActivity] = useState(dummyUserData.activity);

    const inputName = (e) => {
        setName(e.target.value);
    };

    const inputWeight = (e) => {
        setWeight(e.target.value);
    };

    const inputHeight = (e) => {
        setHeight(e.target.value);
    };

    const inputAge = (e) => {
        setAge(e.target.value)
    };

    const inputActivity = (e) => {
        setActivity(e.target.value)
    };

    // const dispatch = useDispatch();
    const klikDaftar = () => {
        // dispatch(signUpUser({name, email, age, weight, height, activity, password, gender}))
        useNavigate().to('/Profile');
    }

    return (
        <>
        <div className='containerReg pb-5'>
            
        <div className="container-2">
            <div className="title">Edit Akun</div>
            <div className="register-content">
                <form>
                    <div className="user-details">
                        
                        <div className="input-box">
                            <span className="details">Nama</span>
                            <input
                                value={name}
                                onChange={inputName} 
                                type="text" 
                                placeholder='Masukan Nama' 
                                required
                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Umur</span>
                            <input
                                value={age}
                                onChange={inputAge}
                                type="text" 
                                placeholder='Masukan Umur' 
                                required
                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Berat Badan</span>
                            <input
                                value={weight}
                                onChange={inputWeight} 
                                type="text" 
                                placeholder='Masukan Berat Badan' 
                                required
                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Tinggi Badan</span>
                            <input
                                value={height}
                                onChange={inputHeight}
                                type="text" 
                                placeholder='Masukan Tinggi Badan' 
                                required
                            />
                        </div>

                        <div className="input-box">
                            <span className="details">Aktivitas</span>
                            <input
                                value={activity}
                                onChange={inputActivity} 
                                type="text" 
                                placeholder='Masukan Masukan Aktivitas' 
                                required
                            />
                        </div>

                    </div>
                    <Link to='/Profile'>
                    <div className="button">
                        <input type='submit' value='Submit' onClick={klikDaftar}></input>
                    </div>
                    </Link>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}

export default ProfileEdit;