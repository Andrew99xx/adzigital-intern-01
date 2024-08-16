import { Link } from 'react-router-dom'

import './style/navbar.css' 
import logo from '../assets/NavBar/logo.png'
import profile from "../assets/NavBar/vector-img/profile.png"
import search from "../assets/NavBar/vector-img/search.png"
import cart from "../assets/NavBar/vector-img/cart.png"
import fav from '../assets/NavBar/vector-img/love.png'

const NavBar = () => {
  return (
    <div className="navSection">
      <div className="wrapperNav">
        <div className="upperSection">
          <LogoSection />
        </div>
        <NavLinks />
        <IconLinks />
      </div>
    </div>
  );
};

export default NavBar;

const LogoSection = () => {
  return (
    <div className="logoSection">
      <img src={logo} alt="logo" />
      <h2>
        <Link to="/" style={{ textDecoration: 'none' }}>Furniro</Link>
      </h2>
    </div>
  );
};

const IconLinks = () => {
  return (
    <div className="lastSection">
      <div><Link to="/profile" style={{ textDecoration: 'none' }}><img src={profile} alt="Profile" className='svg'/></Link></div>
      <div>
        <img src={search} alt="Search" className='svg'/>
      </div>
      <div><Link to="/" style={{ textDecoration: 'none' }}><img src={fav} alt="Favorites" className='svg'/></Link></div>
      <div><Link to="/cart" style={{ textDecoration: 'none' }}><img src={cart} alt="Cart" className='svg'/></Link></div>
    </div>
  );
};


const navLinksData = [
  { path: "/", label: "Home" },
  { path: "/shop", label: "Shop" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const NavLinks = () => {
  return (
    <div className="middleSection">
      {navLinksData.map((link,index)=>(
        <div key = {index} className='middle'>
          <Link to={link.path} style={{ textDecoration: 'none' }}>
            {link.label}
          </Link>
        </div> 
      ))}
    </div>
  );
};
 



// const NavBar = () => {
//   return (
//     < >
//       <div className="navSection">
//           <div className="wrapperNav">
//           <div className="upperSection">
//                 <div className="logoSection">
//                   <img src={logo} alt="logo"  />
//                   <h2>Furniro</h2>
//                 </div>
//                 {/* <div className="nameSection">
//                 </div> */}
//            </div>
//             <div className="middleSection">

//                  <div className='middle'>
//                   <Link to="/"  style={{ textDecoration: 'none', }}>Home</Link>
//                  </div>
//                  <div className='middle'>
//                   <Link to="/shop"  style={{ textDecoration: 'none', }}>Shop</Link>
//                  </div> 
//                  <div className='middle'>
//                   <Link to="/about"  style={{ textDecoration: 'none', }}>About</Link>
//                  </div>
//                  <div className='middle'>
//                   <Link to="/contact"  style={{ textDecoration: 'none', }}>Contact</Link>
//                  </div>

//             </div>
//             <div className="lastSection">
//                 <div><Link to="/profile"  style={{ textDecoration: 'none', }}><img src={profile} alt="" srcset="" className='svg'/></Link></div>
//                 <div>
//                   <img src={search} alt="" srcset="" className='svg'/>
//                 </div>
//                 <div><Link to="/"  style={{ textDecoration: 'none', }}><img src={fav} alt="" className='svg'/></Link></div>
//                 <div><Link to="/cart"  style={{ textDecoration: 'none', }}><img src={cart} alt="" srcset="" className='svg'/></Link></div>
//             </div>
//           </div>
//       </div>

//     </>
//   )
// }

// export default NavBar