import { useState } from 'react';
import axios from "axios";
import { useNavigate, Navigate } from 'react-router-dom';

export default function Signup() {

  const [formData, setFormData] = useState({userName: '', password: '' });
  const navigate = useNavigate();

  const onSignUp = (e) => {
    console.log(formData);
    e.preventDefault();
    //send request to server providing the username and password
    axios.post("https://hackathon-api-mcpt.onrender.com/user/signup", formData)
      .then((res) => {
        if (res.status === 201) {
          alert("Account successfully created. Please login");
          navigate("/login");
        } 
        else {
          console.log(res);
          alert("Signup Failed. Try Again");
        }
      });
  }

  return (
    <div className="Signup text-gray-200 flex justify-center">
      <form className='mt-6' onSubmit={onSignUp}>
      <h1 className="text-3xl text-white block text-center mb-6">Sign Up</h1>
        <label className='block mb-6'>Please enter your information below to register as a new user:</label>
        <label>Username:
          <input className='text-black block' type="text" onChange={(e) => setFormData({...formData, userName: e.target.value})}/>
        </label>
        <label>Password:
          <input className='text-black block' type="password" onChange={(e) => setFormData({...formData, password: e.target.value})}/>
        </label>
        <button className='mt-6 lg:inline-block py-2 px-6 lg:mr-3 bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold rounded-xl transition duration-200'>Sign Up</button>
      </form>
    </div>
  );
}