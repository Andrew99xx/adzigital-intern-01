import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from '../Firebase/firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase';
// import Modal from 'react-modal';


const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('User registered successfully');
      } catch (error) {
        console.error('Error signing up: ', error);
        alert(error.message);
      }
    }
    return (
        <div className="signup-form" id="signupForm" style={{ display: 'block' }}>
          <h2>Signup</h2>
          <form onSubmit={handleSignup}>
            <input
              type="email"
              id="signupEmail"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="signupPassword"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button id='b2' type="submit">Signup</button>
          </form>
          <p>Already have an account? <a href="#" id="loginLink">Login</a></p>
        </div>
    );
};





export default Signup;