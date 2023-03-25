import { useState } from "react";
import classes from "./LoginPage.module.css";
export const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    //login logic
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={(e)=>handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button type="submit">Login</button>
            </form>
            {error && <p>{error}</p>}


        </div>
    );
};
