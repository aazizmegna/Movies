import '../App.css';
import React from 'react'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='login'>
        <h1>Sign in</h1>
        <div className='form'>
            <div>
                <input type='text' placeholder='Username'/>
            </div>
            <div>
                <input type='password' placeholder='Password'/>
            </div>
            <div>
                <Link to='/home'>Sign in</Link>
            </div>
            <div>
                <span>Don't have an account ? <Link to='/signup'>Sign up</Link></span>
            </div>
        </div>
    </div>
  )
};

export default Login;