import React, { useState } from 'react';
import './styles/signin.css'
import Google from '../assets/svg-icons/google-color-svgrepo-com.svg'

import facebook from '../assets/svg-icons/facebook-svgrepo-com.svg'
import { Link,   useNavigate } from 'react-router-dom';
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth,  } from '../Firebase/firebaseSdk';
import Run from '../assets/RightSide.png'
 




const initialValues = {
    email: "",
    password: "",
};

const Signin = () => {

    const [values, setValues] = useState(initialValues);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };

      
      
      const onhandleLogin =async (e)=>{
        e.preventDefault();
        console.log(values);
        try {
          await signInWithEmailAndPassword(auth,values.email,values.password);
          const user = auth.currentUser;
          console.log(user);
          console.log("User logged In  successfully");
          console.log(user?.uid);
          alert(`Welcome ${user.email}`)
          if(user?.uid){
            navigate('/')
          }
 
          setValues(initialValues)
        } catch (error) {
                console.error(error);
                alert(error) 
                 
        }
      }
            
            
            const onGoogleLogIn = () =>{
              const provider = new GoogleAuthProvider();
              signInWithPopup(auth,provider).then(async(result)=>{
                  console.log(result);
                  navigate('/')
              })
            }  
            


  return (
    <> 
      <div className='sign-in-main-container'>
        
        <div className="sign-in-wrapper-container">

            <div className="sign-in-wrapper-container-left-side">

                  <div className="sign-in-wrapper-container-left-side-heading">
                      <h1>WELCOME BACK</h1>
                      <h2>Welcome back! Please enter your details.</h2>
                  </div>

                  <div className="sign-in-wrapper-container-left-side-log-in">

                      <div className="sign-in-wrapper-container-left-side-log-in-email">
                          <h2 id='sign-in-h2'>Email</h2>
                          <div className="sign-in-wrapper-container-left-side-log-in-input-section">
                            <input type="text" name="email" value={values.email}  onChange={handleInputChange}id="" className='sign-in-input' placeholder='Enter your email'/>
                          </div>
                      </div>

                    <div className="sign-in-wrapper-container-left-side-log-in-password">
                      <h2 id='sign-in-h2'>Password</h2>
                      <div className="sign-in-wrapper-container-left-side-log-in-input-section">
                        <input type="text" name="password" value={values.password} onChange={handleInputChange} id="" className='sign-in-input' placeholder='**********'/>
                      </div>
                    </div>    
                  </div>

                          
                  <div className='sign-in-wrapper-container-left-side-log-in-remember'>
                      <h2 id="remember">
                        <input type="checkbox" name="" id="" /> Remember me</h2>
                      <h2 id="remember">Forgot password</h2>
                  </div>

                  <div className="sign-in-wrapper-container-left-side-log-in-button">
                      <button className="sign-in-btn" onClick={onhandleLogin}>Sign in</button>
                  </div>

                  <div className="sign-in-google-div">
                    <button className="sign-in-btn2" onClick={onGoogleLogIn}> <img src={Google} height='30px'  width='30px' alt=''/>Sign in with Google</button>
                  </div>

            </div>
            
            <div className="sign-in-wrapper-container-right-side">
              <img src={Run} alt=''/>
            </div>

        </div>

      </div>
    </>
  )
}

export default Signin

 