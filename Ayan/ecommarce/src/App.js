import { Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Shop from './pages/Shop';
import NavBar from './components/NavBar';
import UploadProduct from './pages/UploadProduct';
import Footer from './components/Footer';
import Home2 from './pages/Home2';
import SingleProduct from './pages/SingleProduct';
import ParentComponent from './components/ParentComponent';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
 


function App() {
  const location = useLocation();
  
  // Check if the current path is either /signup or /signin
  const hideNavAndFooter = location.pathname === '/signup' || location.pathname === '/signin';

  return (
    <>
      {!hideNavAndFooter && <NavBar />}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/up" element={<UploadProduct />} />
        {/* <Route path="/" element={<Home2 />} /> */}
        <Route path="/" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/p/:id" element={<ParentComponent />} />{/*//test*/}
        <Route path ='/product/:id' element={<SingleProduct/>} />

      </Routes>
      
      {/* {!hideNavAndFooter && <Footer />} */}
    </>
  );
}

export default App;

// import { Route, Routes } from 'react-router-dom';
//   import './App.css';
//   import Signup from './pages/Signup';
//   import Signin from './pages/Signin';
//   // import Home1 from './pages/Home1';
//   import Shop from './pages/Shop';
//   import NavBar from './components/NavBar';
//   // import Card from './components/Card';
//   import UploadProduct from './pages/UploadProduct';
//   import Home from './pages/Home';
//   import Footer from './components/Footer';
// import SingleProduct from './pages/SingleProduct';
// function App() {
//   return (
//     < > 
//     <NavBar/>
//         <Routes>  
//           {/* <Route path="/" element={<NavBar />} /> */}
//           <Route path ='/' element={<Home/>} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/signin" element={<Signin />} />
//           <Route path ='/shop' element={<Shop/>} />
//           <Route path ='/up' element={<UploadProduct/>} />
//           <Route path ='/product/:id' element={<SingleProduct/>} />
//           {/* <Route path ='/about' element={<A/>} />     
//         </Routes>
//         <Footer/>
//    </>  
//   );
// }
// export default App;
