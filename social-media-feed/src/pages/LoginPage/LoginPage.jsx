import { useState } from "react";
import classes from "./LoginPage.module.css";
import { SetUser } from "../../data";
import { useNavigate } from "react-router-dom";
export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            setError('Please enter all fields');
            return;
        }
        if (!SetUser(username, password)
        ) {
            setError('Invalid credentials');
            setPassword('');
            setUsername('');
            return;
        }
        setError('')
        navigate('/', { replace: true });
    }
    return (
        <div>
            <h1 className={classes.Heading}>Login</h1>
            <form onSubmit={(e) => handleSubmit(e)} className={classes.Form}>
                <label htmlFor="username" className={classes.Label}>Username</label>
                <input type="text" id="username" className={classes.Input} value={username} onChange={(e) => setUsername(e.target.value)} />
                <label className={classes.Label} htmlFor="password">Password</label>
                <input type="password" id="password" className={classes.Input} value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className={classes.Button} type="submit">Login</button>
            </form>
            {error && <p className={classes.ErrorText}>{error}</p>}


        </div>
    );
};
