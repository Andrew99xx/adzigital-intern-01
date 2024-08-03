import { Link } from 'react-router-dom'

import './style/navbar.css' 
import logo from '../assets/logo.png'
import profile from "../assets/vector-img/profile.png"
import search from "../assets/vector-img/search.png"
import cart from "../assets/vector-img/cart.png"
import fav from '../assets/vector-img/love.png'



 
const NavBar = () => {
  return (
    < >
      <div className="navSection">
          <div className="wrapperNav">
          <div className="upperSection">
                <div className="logoSection">
                  <img src={logo} alt="logo"  />
                  <h2>Furniro</h2>
                </div>
                {/* <div className="nameSection">
                </div> */}
           </div>
            <div className="middleSection">
                 <div className='middle'>
                  <Link to="/">Home</Link>
                 </div>
                 <div className='middle'>
                  <Link to="/shop">Shop</Link>
                 </div> 
                 <div className='middle'>
                  <Link to="/about">About</Link>
                 </div>
                 <div className='middle'>
                  <Link to="/contact">Contact</Link>
                 </div>
            </div>
            <div className="lastSection">
                <div><Link to="/profile"><img src={profile} alt="" srcset="" className='svg'/></Link></div>
                <div>
                  <img src={search} alt="" srcset="" className='svg'/>
                </div>
                <div><Link to="/"><img src={fav} alt="" className='svg'/></Link></div>
                <div><Link to="/cart"><img src={cart} alt="" srcset="" className='svg'/></Link></div>
            </div>
          </div>
      </div>

    </>
  )
}

export default NavBar