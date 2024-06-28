import { useState } from 'react';
import './signup.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Signup2() {
    const navigate = useNavigate(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (username.trim() !== '' && email.trim() !== '' && password.trim() !== '') {
            setResult({ username, email, password });
            setError(false);
            navigate('/login');
            axios.post('http://localhost:5001/signup2 ',{username,email,password})
         } else {
            setError(true);
        }
    }

    function handlechanges1(e) {
        setUsername(e.target.value);
    }

    function handlechanges2(e) {
        setEmail(e.target.value);
    }

    function handlechanges3(e) {
        setPassword(e.target.value);
    }

  

    return (
        <div className="container">
            <div className="content">
                <h1>Register</h1>
                <h2>Username</h2>
                <div className="box1">
                    <input type="text" placeholder="Enter your name" value={username} onChange={handlechanges1} />
                </div>
                <h2>Email</h2>
                <div className="box2">
                    <input type="email" placeholder="Enter your email" value={email} onChange={handlechanges2} />
                </div>
                <h2>Password</h2>
                <div className="box3">
                    <input type="password" placeholder="Enter your password" value={password} onChange={handlechanges3} />
                </div>
                <h2>Re-enter Password</h2>
                <div className="box4">
                    <input type="password" placeholder="Re-enter your password" />
                </div>
                {error && <p>You must enter all fields</p>}
                <div>
                    <button onClick={handleSubmit}>Sign Up</button>
                    {result && (
                        <>
                            <h4>Your username: {result.username}</h4>
                            <h4>Your email: {result.email}</h4>
                            <h4>Your password: {result.password}</h4>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Signup2;
