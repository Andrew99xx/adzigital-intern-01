import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
// import { signInWithEmailAndPassword } from '../Firebase/firebase/auth';
// import Modal from 'react-modal';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('User logged in successfully');
      } catch (error) {
        console.error('Error logging in: ', error);
        alert(error.message);
      }
    }
    return (
        <div className="login-form" id="loginForm" style={{ display: 'none' }}> 
                    <h2>Login</h2>
                    <form onSubmit={handleLogin}>
                        <input type="email" id="email" placeholder="Email" required value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                        <input type="password" id="password" placeholder="Password" required value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                        <button id='b1' type="submit">Login</button>
                    </form>
                    <p>New user? <a href="#" id="signupLink">Signup</a></p>
                    <p><a href="#" id="forgotPasswordLink">Forgot Password?</a></p>
                </div>
    );    
};


export default Login;