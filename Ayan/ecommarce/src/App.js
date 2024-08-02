 
import { Route, Routes } from 'react-router-dom';

  import './App.css';
  import Signup from './pages/Signup';
  import Signin from './pages/Signin';
  // import Home1 from './pages/Home1';
  
  
  import Shop from './pages/Shop';
  import NavBar from './components/NavBar';
  // import Card from './components/Card';
  import UploadProduct from './pages/UploadProduct';
  import Home from './pages/Home';
  import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';

 

 
function App() {
  return (
    < > 
    <NavBar/>
        <Routes>
   
          {/* <Route path="/" element={<NavBar />} /> */}

          <Route path ='/' element={<Home/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          <Route path ='/shop' element={<Shop/>} />
          <Route path ='/up' element={<UploadProduct/>} />
          <Route path ='/product/:id' element={<SingleProduct/>} />
          {/* <Route path ='/about' element={<A/>} /> */}



        
        </Routes>
        <Footer/>
      


   </>  
  );
}

export default App;
