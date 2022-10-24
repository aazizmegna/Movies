import '../App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './FirebaseConfig';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {


    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (password.length > 5 && email !== '') {
            setBtn(true)
        } else if (btn) {
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSubmit = e => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            setEmail('');
            setPassword('');
            navigate('/home', { replace: true});
        })
        .catch(error => {
            setError(error);
            setEmail('');
            setPassword('');
        })

    }




  return (
    <div className='login'>

        {error !== '' && <span>{error.message}</span>}

        <h1>Sign in</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <input onChange={e => setEmail(e.target.value)} value={email} type="email" placeholder='Email' autoComplete="off" required/>
            </div>
            <div>
                <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder='Password' autoComplete="off" required/>
            </div>
            <div>

                {<button disabled={btn ? false : true }>Sign in</button>}
                {/* <Link to='/home'>Sign in</Link> */}
            </div>
            <div>
                <span>Don't have an account ? <Link to='/signup'>Sign up</Link></span>
            </div>
        </form>
    </div>
  )
};

export default Login;