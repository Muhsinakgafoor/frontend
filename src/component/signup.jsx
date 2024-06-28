import { useState } from 'react';
import './signup.css';

function Signup() {

    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [result, setResult] = useState('');
    const [error, setError] = useState(false);


    function handleSubmit() {
        // if(password  != '') {
        setResult({username,email,password});
        setError(false);
    // } else {
    //   setError(true);
    //  }
    }
  
    function handlechanges1(e){
      setusername(e.target.value);
    }
  
     function handlechanges2(e){
      setemail(e.target.value);
    }

    function handlechanges3(e){
        setpassword(e.target.value);
    }
  

    return (
        <>
        <div>
        <div class="container">
            <div class="content">
                <h1>Register</h1>
                <h2>username</h2>
                <div classname="box1">
                    <input type="username"placeholder="enter your name" onChange={handlechanges1}/>
                </div>
                <h2>email</h2>
                <div classname="box2">
                    <input type="email"placeholder="enter your email" onChange={handlechanges2}/>
                </div>
                <h2>password</h2>
                <div classname="box3">
                    <input type="password"placeholder="enter your password" onChange={handlechanges3}/>
                </div>
                <h2>repassword</h2>
                <div classname="box4">
                    <input type="repassword"placeholder="enter your password"/>
                </div>
                {error == true ?<p>you must enter all fields</p>:''}
                <div >
                    <button onChange={handleSubmit}> signin</button>
                    <h4>Your username {result}</h4>
                    <h4>Your email {result.email}</h4>
                    <h4>Your password {result.password}</h4>
                </div>
            </div>

        </div>
        </div>
        </>
     );
}
    
    export default Signup;