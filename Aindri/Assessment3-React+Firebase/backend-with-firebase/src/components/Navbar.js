import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import './Navbar.css';
import Signup from './Signup';
// import Login from './Login';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from 'firebase/auth';


// import { createUserWithEmailAndPassword } from '../Firebase/firebase/auth';


import { auth } from '../Firebase/firebase';
// import { signInWithEmailAndPassword } from '../Firebase/firebase/auth';


const Navbar = ({ onToggle }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalIsOpenPerson, setIsOpenPerson] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function openModalPerson() {
    setIsOpenPerson(true);
  }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModalPerson() {
    setIsOpenPerson(false);
  }

  
  useEffect(() => {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const signupLink = document.getElementById('signupLink');
    const loginLink = document.getElementById('loginLink');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');

    const handleSignupLinkClick = (event) => {
      event.preventDefault();
      if (loginForm && signupForm) {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
      }
    };

    const handleLoginLinkClick = (event) => {
      event.preventDefault();
      if (loginForm && signupForm) {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
      }
    };

    const handleforgotPasswordLinkClick = (event) => {
        event.preventDefault();
        if (loginForm && signupForm) {
          loginForm.style.display = 'none';
          signupForm.style.display = 'block';
        }
      };

    if (signupLink) {
      signupLink.addEventListener('click', handleSignupLinkClick);
    }

    if (loginLink) {
      loginLink.addEventListener('click', handleLoginLinkClick);
    }

    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', handleforgotPasswordLinkClick);
    }    

    return () => {
      if (signupLink) {
        signupLink.removeEventListener('click', handleSignupLinkClick);
      }
      if (loginLink) {
        loginLink.removeEventListener('click', handleLoginLinkClick);
      }
    };
  }, []);



  // const Login = () => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  
  //   const handleLogin = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await signInWithEmailAndPassword(auth, email, password);
  //       alert('User logged in successfully');
  //     } catch (error) {
  //       console.error('Error logging in: ', error);
  //       alert(error.message);
  //     }
  // };



  // const Signup = () => {
  //   const [email, setEmail] = useState('');
  //   const [password, setPassword] = useState('');
  
  //   const handleSignup = async (e) => {
  //     e.preventDefault();
  //     try {
  //       await createUserWithEmailAndPassword(auth, email, password);
  //       alert('User registered successfully');
  //     } catch (error) {
  //       console.error('Error signing up: ', error);
  //       alert(error.message);
  //     }
  //   };


  return (
    <div className="navbar">
      <div className="nav-left">
        <ul className="ul">
          <a href="#" className="icons" id="location" onClick={(e) => { e.preventDefault(); onToggle('location-block'); }}></a>
          <a href="#" onClick={(e) => { e.preventDefault(); onToggle('jewelry-block'); }}>JEWELRY</a>
          <a href="#">NEW RELEASES</a>
          <a href="#" onClick={(e) => { e.preventDefault(); onToggle('gifts-block'); }}>GIFTS</a>
        </ul>
      </div>
      <div className="nav-logo">
        <h1>APOLLONIAN</h1>
      </div>
      <div className="nav-right">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <button className="search-button">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <div className="nav-right-icons">
          <div className="icons" id="heart-icon" onClick={openModal}></div>
          <div className="icons" id="bag-icon"></div>
          <div className="icons" onClick={openModalPerson} id="person-icon"></div>
        </div>
      </div>
      <Modal
        isOpen={modalIsOpenPerson}
        onRequestClose={closeModalPerson}
        contentLabel="Person Block"
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModalPerson} className="close-btn">X</button>
        <div id='person-bl'>
          <div className="login-signup">
            <Login />
            <Signup />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;
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