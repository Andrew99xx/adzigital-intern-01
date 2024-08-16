import React from 'react';
import './style/breadcrumbs.css'; // Create this CSS file for styling

import logo from '../assets/breadcrumbs/sitelogo.png'

const Breadcrumb = ({pageName}) => {
    return (
        <div className="cart-header">
            <div className="cart-overlay">
                <div className="cart-content">
                    <div className="cart-icon">
                        {/* Add your cart icon here if you have one */}
                        <img src={logo} alt="Cart Icon" />
                    </div>
                    <h1 className="cart-title">{pageName}</h1>
                    <p className="breadcrumb">
                        <span>Home</span> &gt; <span>{pageName}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;




























// import { Link, useLocation } from 'react-router-dom';
// import './style/breadcrumb.css'
// const Breadcrumb = () => {
//   const location = useLocation();
//   const pathnames = location.pathname.split('/').filter(x => x);
//   const breadcrumbs = pathnames.map((name, index) => {
//     const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
//     const breadcrumbName = name.charAt(0).toUpperCase() + name.slice(1);
//     return (
//       <Link key={routeTo} to={routeTo}>
//         {breadcrumbName}
//       </Link>
//     );
//   });

//   return (
//     <div className='breadcrumb-section'>
//       {breadcrumbs}
//     </div>
//   );
// };

// export default Breadcrumb;