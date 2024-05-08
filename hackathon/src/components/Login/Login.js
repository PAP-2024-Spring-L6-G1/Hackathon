import { useState } from "react";
import axios from "axios";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import {useNavigate, Navigate} from 'react-router-dom';

export default function Login() {

  const signIn = useSignIn();
  const [formData, setFormData] = useState({ userName: '', password: '' });
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate()

  const onSubmit = (e) => {
    console.log(formData);
    e.preventDefault();
    axios.post('https://hackathon-api-mcpt.onrender.com/user/login', formData)
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
          if (signIn({
            auth: {
              token: res.data.token,
              type: 'Bearer'
            },
            refresh: res.data.refreshToken,
            userState: res.data.authUserState
          })) { // Only if you are using refreshToken feature
            // Redirect or do-something
            navigate('/');
            console.log("isAuthenticated: " + isAuthenticated);
            window.location.reload();
          } else {
            //Throw error
          }
        }
      }).catch(err => {
        alert("Login failed");
        // console.log(err);
      })
  }


  return (
    <div className="Login text-gray-200 flex justify-center">
      <form className='mt-6' onSubmit={onSubmit}>
        <h1 className="text-3xl text-white block text-center mb-6">Log In</h1>
        <label className='block mb-6'>Please enter your information below to login to your existing account:</label>
        <label>Username:
          <input className='text-black block' type="text" onChange={(e) => setFormData({ ...formData, userName: e.target.value })} />
        </label>
        <label>Password:
          <input className='text-black block' type="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
        </label>
        <button className='mt-6 bg-gray-50 rounded-xl text-black lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-300 text-sm text-gray-900 font-semibold rounded-xl transition duration-200'>Login</button>
      </form>
    </div>
  );
}