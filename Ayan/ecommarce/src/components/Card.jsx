/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';


import './style/card.css';

const Card = ({ id, picture, name, details, price }) => {
  
  const navigate = useNavigate();
  
 

  const handleNavigation = () => {
    // navigate(`/product/${id}`,);
    window.open(`/product/${id}`,'_blank', )
  };
  
  console.log("key",id);
  
  return (
   

      <div className="card-container">
        
          <div className="card-product-image">
            <img src={picture} alt={name} />
            <div className="card-body">
                  <button className='card-btn' onClick={()=> navigate('/') }>Add to Cart</button>
                  <div className="card-body-share">
                    <h1 className='card-title'>Share</h1>
                    <p className='card-sub-title'>Compare</p>
                    <p className='card-info'>Like</p>
                  </div>
            </div>
          </div>


         <div className="card-product-description" onClick={handleNavigation}>
           

          {/* <div className="card-product-description-name"> */}
            <h6 className='card-product-description-name'>{name}</h6>
          {/* </div> */}
          {/* <div className="card-product-description-details"> */}
            <p className="card-product-description-details">{details}</p>
          {/* </div> */}
          {/* <div className="card-product-description-price-section"> */}
            <div className="card-product-description-price">

              <p>Rp {price}</p>
              <p>RP {id}</p>
            </div>
          {/* </div> */}
          </div>
        
          {/* <div className="card-body">
                  <button className='card-btn' onClick={()=> navigate('/') }>Add to Cart</button>
                  <div className="card-body-share">
                    <h1 className='card-title'>Share</h1>
                    <p className='card-sub-title'>Compare</p>
                    <p className='card-info'>Like</p>
                  </div>
          </div> */}
        
        

      </div>
    
  );
};

export default Card;




 
 

/*
import './style/card.css';

const Card = ({ picture, name, details, price }) => {
  return (
   

      <div className="card-container">
        <div className="card-product-image">
          <img src={picture} alt={name} />
        </div>
         <div className="card-product-description">
          <div className="card-product-description-name">
            <h6 className='card-product-description-name'>{name}</h6>
          </div>
          <div className="card-product-description-details">
            <p className="card-product-description-details">{details}</p>
          </div>
          <div className="card-product-description-price-section">
            <div className="card-product-description-price">

              <p>Rp 9999999</p>
              <p>RP 8988888</p>
            </div>
          </div>
        </div>
        
        .<div className="card-body">
                <h1 className='card-title'>NYC</h1>
                <p className='card-sub-title'>Hello</p>
                <p className='card-info'>asfasfwfwaassf</p>
                <button className='card-btn'>Submit</button>
            </div>
      </div>
    
  );
};

export default Card;
*/





























































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