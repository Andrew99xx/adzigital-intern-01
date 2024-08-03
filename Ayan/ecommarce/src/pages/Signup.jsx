import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword,  FacebookAuthProvider,  GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth,db } from '../Firebase/firebaseSdk';
import { setDoc,doc } from 'firebase/firestore';

import './styles/signup.css'
import facebook from '../assets/svg-icons/facebook-svgrepo-com.svg'
import Google from '../assets/svg-icons/google-color-svgrepo-com.svg'
import icon from '../assets/signuppage.png'
import ful from '../assets/signupbig.png'




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
        const Fprovider = new FacebookAuthProvider();
        signInWithPopup(auth,Fprovider).then(async(result)=>{
            console.log(result);
            navigate('/shop')
        })
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
                alert("user has registered successfully")
                setValues(initialValues)
            }else{
                alert("password Should be same")
                console.log("password Should be same"); 
            }  
        } catch (error) {
            alert(error);
            console.error(error); 
        }
    }


  return (
    <> 
        <div className='sign-up-main-container'>
            <div className="sign-up-wrap-container-main">
               
                <div className="sign-up-wrapper-container">

                    <div className="sign-up-container-with-logo">

                        <div className="sign-up-container-with-logo-left">
                            <div className="sign-up-container-with-logo-left-logo">
                                <img src={icon} alt="icon"/>
                            </div>

                            <div className="sign-up-container-with-logo-left-start">
                                <h2>Getting</h2>
                                <h2>Started</h2>
                            </div>    
                        </div>


                             
                        <div className="sign-up-container-right-side">
                                <div className="sign-up-container-right-side-language-wrapper">
                                    <h6>English (UK)</h6>
                                </div>

                                
                                <div className="sign-up-container-right-side-main">
                                    <div className="sign-up-container-right-side-main-upper-section ">
                                        <h1>Create Account</h1>

                                        <div className="sign-up-container-right-side-main-button-sign-up">
                                            <button className='s-btn1' onClick={onGoogleLogIn}> <img src={Google} height='12px'  width='20px' alt=''/>Signup with Google</button>
                                            <button className='s-btn2' onClick={onFaceBookLogIn}><img src={facebook} height='12px'  width='20px' alt=''/>Signup with Facebook</button>      
                                        </div>  

                                    </div>

                                    <div className="sign-up-container-right-side-OR-section">
                                        <div class="sign-up-container-right-side-OR-section-line-FORM"></div>
                                        <div class="sign-up-container-right-side-OR-section-or-text-FORM">OR</div>
                                        <div class="sign-up-container-right-side-OR-section-line-FORM"></div>
                                    </div>

                                    <div className="sign-up-container-right-side-lower-section-sign-up">
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
                                            <h6>Already have an account? <Link to="/signin" style={{ textDecoration: 'none' }}><span>Log In</span></Link></h6>
                                        </div>
                                    </div>
                                </div>
                        </div>

                             
                    </div>
 
                    
                    <div className="left-side-sign-up-container-big-picture">
                        <img src={ful} alt="ful" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Signup