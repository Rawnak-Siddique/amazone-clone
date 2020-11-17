import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import './LoginPage.css';
import { auth } from './firebase';

function LoginPage() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            if (auth) {
                history.push('/')
            }
        }).catch(error => alert(error.message))
    };
    return (
        <div className="loginPage" >
            <Link to="/" >
                <img className="loginPage__logo" src="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt="https://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" />
            </Link>
            <div className="loginPage__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail:</h5>
                    <input type='text' value={email} onChange={e =>  setEmail(e.target.value)} />

                    <h5>Password:</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn} className="loginPage__signInButton" >Sign In</button>
                </form>
                <p>
                    By signing-in you agree to Amazon FAKE CLONE Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="loginPage__registerButton" >Create your Amazone Account</button>
            </div>
        </div>
    )
}

export default LoginPage;
