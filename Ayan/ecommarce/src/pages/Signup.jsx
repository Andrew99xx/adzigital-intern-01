import { useState } from 'react';


import './styles/signup.css'
import facebook from '../assets/svg-icons/facebook-svgrepo-com.svg'
import Google from '../assets/svg-icons/google-color-svgrepo-com.svg'
import icon from '../assets/signuppage.png'
import ful from '../assets/signupbig.png'
import { Link, useNavigate } from 'react-router-dom';

import { createUserWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth,db } from '../Firebase/firebaseSdk';

import { setDoc,doc } from 'firebase/firestore';
// import { toast } from 'react-toastify';




const initialValues = {
    fullName: "",
    email: "",
    phoneNumber:"",
    password: "",
    confirmpassword:"",
    
};

const Signup = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
    };
    
      const onGoogleLogIn = () =>{
         
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider).then(async(result)=>{
            console.log(result);
            navigate('/')
        })
      }
      
      const onFaceBookLogIn = () =>{
        // const provider = new FacebookAuthProvider
      }
    

    const onSubmit =async (e)=>{
        e.preventDefault();
        console.log(values);
        try {
            if(values.password === values.confirmpassword){
                await createUserWithEmailAndPassword(auth,values.email,values.password);
                const user = auth.currentUser;
                console.log(user);
                if(user){
                    await setDoc(doc(db,"Users",user.uid),{
                        email: user.email,
                        fullName : values.fullName,
                        phoneNumber : values.phoneNumber,

                    })
                }
                 
                console.log("user has registered successfully");
                setValues(initialValues)
            }else{
                console.log("password Should be same");
                 
            }  
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
                        <img src={icon} alt="icon"   />
                    </div>
                    <div className="start">

                    </div>
                    <div className="picturessss">
                        <img src={ful} alt="ful"    />
                    </div>

                
                
                
                </div>

                <div className="left-side-signup-container">

                    <div className="language-wrapper">
                            <h6>English (UK)</h6>
                    </div>

                    <div className="upper-section-signup">
                        <h1>Create Account</h1>
                        <div className="button-signup">
                            <button className='s-btn1' onClick={onGoogleLogIn}> <img src={Google} height='12px'  width='20px' alt=''/>Signup with Google</button>
                            <button className='s-btn2' onClick={onFaceBookLogIn}><img src={facebook} height='12px'  width='20px' alt=''/>Signup with Facebook</button>

                        </div>  
                    </div>

                    <div className="OR-section">
                        <div class="line-FORM"></div>
                        <div class="or-text-FORM">OR</div>
                        <div class="line-FORM"></div>
                    </div>


                    <div className="lower-section-signup">
                            <form>
                                <div className="input-section">
                                
                                    <input type="text" name="fullName" value={values.fullName}  onChange={handleInputChange}id="" className='input' placeholder='Full Name'/>
                                </div>
                                <div className="input-section">
                                    <input type="text" name="email" value={values.email}  onChange={handleInputChange}id="" className='input' placeholder='Email'/>
                                </div>
                                <div className="input-section">
                                    <input type="number" name="phoneNumber" value={values.phoneNumber} onChange={handleInputChange} id="" className='input' placeholder='Phone Number'/>
                                </div>
                                <div className="input-section">
                                    <input type="text" name="password" value={values.password} onChange={handleInputChange} id="" className='input' placeholder='Password'/>
                                </div>
                                <div className="input-section">
                                    <input type="text" name="confirmpassword" value={values.confirmpassword} onChange={handleInputChange} id="" className='input' placeholder='Confirm Password'/>
                                </div>
                                <div className="create-account-btn">
                                    <button className='btn-3' onClick={onSubmit}>Create Account</button>
                                </div>
                            </form>

                                <div className="already-account">
                                    <h6>Already have an account? <Link to="/signin">Log In </Link></h6>
                                     
                                </div>

                    </div>


                </div>
                    
            </div>

        </div>
    </>
  )
}

export default Signup