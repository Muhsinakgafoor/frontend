/*import { useState } from 'react';
import './login.css';
import {useNavigate} from 'react-router-dom';
import axios from "axios";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState({});
    const [error, setError] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (email.trim() !== '' && password.trim() !== '') {
            setResult({ email, password });
            setError(false);
            axios.post('http://localhost:5001/login',{email,password})
        } else {
            setError('');
            navigate('/login');
            setError(true);
        }
    }

    function handleChanges1(e) {
        setEmail(e.target.value);
    }

    function handleChanges2(e) {
        setPassword(e.target.value);
    }

    

    return (
        <div className="container">
            <div className="content">
                <h1>Login</h1>
                <h2>Email</h2>
                <div className="box2">
                    <input type="email" placeholder="Enter your email" value={email} onChange={handleChanges1} />
                </div>
                <h2>Password</h2>
                <div className="box3">
                    <input type="password" placeholder="Enter your password" value={password} onChange={handleChanges2} />
                </div>
                <h2>Re-enter Password</h2>
                <div className="box4">
                    <input type="password" placeholder="Re-enter your password" />
                </div>
                {error && <p>You must enter all fields</p>}
                <div>
                    <button onClick={handleSubmit}>Login</button>
                    {result.email && (
                        <div>
                            <h4>Your email: {result.email}</h4>
                            <h4>Your password: {result.password}</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login;*/


/*import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom'; 
import axios from "axios";

function Login() {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        if (email.trim() !== '' && password.trim() !== '') {
            
            axios.post('http://localhost:5001/login', { email, password })
                /*.then(() => navigate('/aboutme2'))
                .catch(err => console.error('Login failed:', err));
            setResult({ email, password });
            setError(false);
        } else {
            setError(true);
        }
    }*/
      /*  .then(response => {
            if (response.data.success) {
                navigate('/aboutme2');
            } else {
                setError(true);
            }
        })
        .catch(err => {
            console.error('Login failed:', err);
            setError(true);
        });
} else {
    setError(true);
}
}

    function handleChanges1(e) {
        setEmail(e.target.value);
    }

    function handleChanges2(e) {
        setPassword(e.target.value);
    } */


        import React, { useState } from 'react';
        import './login.css';
        import { useNavigate } from 'react-router-dom';
        import axios from "axios";
        
        function Login() {
          const navigate = useNavigate();
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
          const [repassword, setRepassword] = useState('');
          const [error, setError] = useState(false);
          const [result, setResult] = useState({ email: '', password: '' });
        
          function handleChanges1(e) {
            setEmail(e.target.value);
          }
        
          function handleChanges2(e) {
            setPassword(e.target.value);
          }
        
          function handlechanges3(e) {
            setRepassword(e.target.value);
          }
        
          function handleSubmit(e) {
            e.preventDefault();
            if (password === repassword) {
              // Handle form submission or further logic here
              console.log('Form submitted:', { email, password, repassword });
            //   setError(false);
               navigate('/aboutme2');
               setResult({ email, password });
          
              axios.post('http://localhost:5001/login',
                {email,
                password
                });
            }
            else {
              setError(true);
              console.log("issues found !");
            }
          }
        

    return (
        <div className="container">
            <div className="content">
                <h1>Login</h1>
                <h2>Email</h2>
                <div className="box2">
                    <input type="email" placeholder="Enter your email" value={email} onChange={handleChanges1} />
                </div>
                <h2>Password</h2>
                <div className="box3">
                    <input type="password" placeholder="Enter your password" value={password} onChange={handleChanges2} />
                </div>
                <div className="box4">
                    <input type="password" placeholder="Re-enter your password" />
                </div>
                {error && <p>You must enter all fields</p>}
                <div>
                    <button onClick={handleSubmit}>Login</button>
                    {result.email && (
                        <div>
                            <h4>Your email: {result.email}</h4>
                            <h4>Your password: {result.password}</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Login; 


