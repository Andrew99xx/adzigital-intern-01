 
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home1 from './pages/Home1';
 
 
import Shop from './pages/Shop';
import NavBar from './components/NavBar';
import Card from './components/Card';
import UploadProduct from './pages/UploadProduct';
import Home from './pages/Home';
 

 
function App() {
  return (
    < > 
    <NavBar/>
        <Routes>
   
          {/* <Route path="/" element={<NavBar />} /> */}

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          {/* <Route path ='/shop' element={<Shop/>} /> */}
          <Route path ='/' element={<Home/>} />
        
        </Routes>
         
      


   </>  
  );
}

export default App;
