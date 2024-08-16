import React, { useState } from 'react';


import './styles/signup.css'
import facebook from '../assets/svg-icons/facebook-svgrepo-com.svg'
import Google from '../assets/svg-icons/google-color-svgrepo-com.svg'
import { Link,   useNavigate } from 'react-router-dom';
import {  signInWithEmailAndPassword } from 'firebase/auth';
import { auth,  } from '../Firebase/firebaseSdk';
 
// import { toast } from 'react-toastify';




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
                if(user?.uid){
                  navigate('/')
                }
                  
                
                 
                
                
                 
                
                setValues(initialValues)
                
                
              } catch (error) {
                console.error(error); 
                 
              }
            }
            
            
            


  return (
    < > 
        <div className='main-container'>
            
            <div className="wrapper-container">
                <div className="container-with-logo">
                    <div className="logo">

                    </div>
                    <div className="start"></div>
                    <div className="picturessss">
                        <img src="../assets/c1501205252c36b04cbfc4c80f56ab1e.png" alt="" srcset="" />
                    </div>

                
                
                
                </div>

                <div className="left-side-signup-container">

                    <div className="language-wrapper">
                            <h6>English (UK)</h6>
                    </div>

                    <div className="upper-section">
                        <h1>Create Account</h1>
                        <div className="button-signup">
                            <button className='s-btn1'> <img src={Google} height='20px'  width='20px' alt=''/>Google</button>
                            <button className='s-btn2'><img src={facebook} height='20px'  width='20px' alt=''/>Facebook</button>

                        </div>  
                    </div>

                    <div className="OR-section">
                        <div class="line-FORM"></div>
                        <div class="or-text-FORM">OR</div>
                        <div class="line-FORM"></div>
                    </div>


                    <div className="lower-section">
                            <form>
                                <div className="input-section">
                                    <input type="text" name="email" value={values.email}  onChange={handleInputChange}id="" className='input' placeholder='Email'/>
                                </div>
                                 
                                <div className="input-section">
                                    <input type="text" name="password" value={values.password} onChange={handleInputChange} id="" className='input' placeholder='Password'/>
                                </div>
                                 
                                <div className="create-account-btn">
                                    <button className='btn-3' onClick={onhandleLogin}>Log in</button>
                                </div>
                            </form>

                                <div className="already-account">
                                    <h6>New user ?Please <Link to="/signup">Sign up</Link></h6>
                                     
                                </div>

                    </div>


                </div>
                    
            </div>

        </div>
    </>
  )
}

export default Signin