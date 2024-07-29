/* eslint-disable react/prop-types */


import './style/card.css';

const Card = ({ picture, name, details, price }) => {
  return (
   

      <div className="card-container">
        <div className="product-image">
          <img src={picture} alt={name} />
        </div>
        <div className="product-description">
          <div className="name">
            <p>{name}</p>
          </div>
          <div className="details">
            <p>{details}</p>
          </div>
          <div className="price-section">
            <p>Rp {price}</p>
          </div>
        </div>
      </div>
    
  );
};

export default Card;






























































/* eslint-disable react/prop-types */
// import './style/card.css'
// const Card = ({picture,name,details,price}) => {



//   return (
//     < >
//         <div className="card-container">
//           <div className="product-image">
//             {/* <img src="https://picsum.photos/200/300" alt="" /> */}
//             <img src='{picture}' alt="" />

//           </div>
          
//           <div className="product-description">
//             <div className="name">
//               {/* <p>Syltherine</p> */}
//               <p>{name}</p>

//             </div>
//             <div className="details">
//                 {/* <p>Stylish cafe chair</p> */}
//                 <p>{details}</p>

//             </div>
//             <div className="price-section">
//                   {/* <p>Rp 2.500.000</p> */}
//                   <p>Rp {price}</p>

//             </div>
//           </div>

//         </div>
//     </>
//   )
// }

// export default Card