import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase'; // Assuming you have a Firebase configuration set up
import 'firebase/compat/auth';
import classes from './Login.module.css';

const Login = () => {
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const register = (e) => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email, password) // Use createUserWithEmailAndPassword for registration
            .then(() => {
                history.push('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className={classes.login}>
            <Link to="/">
                <img
                    className={classes.login__logo}
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'}
                    alt="Amazon Logo"
                />
            </Link>

            <div className={classes.login_container}>
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className={classes.firstbutton}>
                        Sign in
                    </button>
                </form>
                <p>Signing in</p>
                <button onClick={register} className={classes.secondbutton}>
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
};

export default Login;
