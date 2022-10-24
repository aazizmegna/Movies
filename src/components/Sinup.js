import React, {useState}from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './FirebaseConfig';
import { Link } from 'react-router-dom';


const Sinup = () => {

    const data = {
        email: '',
        password: '',
    }

    const [loginData, setLoginData] = useState(data);
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        const { email, password } = loginData;
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(user => {
            setLoginData({...data});
        })
        .catch(error => {
            setError(error);
            setLoginData({...data});
        })
    }

    const {email, password} = loginData;

    const btn = email === '' || password === ''
    ? <button disabled>Register</button> : <button>Register</button>

    // gestion erreurs
    const errorMsg = error !== '' && <span>{error.message}</span>;


  return (
    <div className='login'>

        {errorMsg}

        <h1>Sign up</h1>

        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={handleChange} value={email} type='text' id="email" placeholder='Email'/>
            </div>
            <div>
                <input onChange={handleChange} value={password} type='password' id="password" placeholder='Password'/>
            </div>
            <div>
                {/* <Link to='/'>Sign up</Link> */}

                {btn}

            </div>
            <div>
                <span>Already have an account ? <Link to='/'>Login</Link></span>
            </div>
        </form>
    </div>
  )
}

export default Sinup