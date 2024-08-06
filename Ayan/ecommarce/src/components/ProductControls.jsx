import React, { useState } from 'react';
import CartPopup from './CartPopup'; // Adjust the import path accordingly
import './style/productControls.css'

// function ProductControls({ id, product }) {
//   const [quantity, setQuantity] = useState(1);
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   console.log("pc",product);//come in obj 
//   //cover into array 
//   const products = Object.entries(product);
//   console.log("pc0",products);//come in obj 


  

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };
//   // const addToCart = (item) => {
//   //   setCartItems((prevItems) => {
//   //     const existingItem = prevItems.find((i) => i.id === item.id);
//   //     if (existingItem) {
//   //       return prevItems.map((i) =>
//   //         i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//   //       );
//   //     }
//   //     return [...prevItems, { ...item, quantity: 1 }];
//   //   });
//   //   setIsCartOpen(true); // Automatically open the cart when an item is added
//   // };


//   const addToCart = () => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((i) => i.id === id);
//       if (existingItem) {
//         return prevItems.map((i) =>
//           i.id === id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prevItems, { id, ...product, quantity }];
//     });
    
//     setIsCartOpen(true); // Automatically open the cart when an item is added
//   };
  
//   console.log("quantity",quantity,"cartItems",cartItems);
//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   return (
//     <div style={{ display: 'flex', gap: '10px', alignItems: 'center', width: "100%" }}>
//       {/* Counter Component */}
//       <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #000', borderRadius: '5px', padding: '5px' }}>
//         <button onClick={decreaseQuantity} style={{ border: 'none', background: 'transparent', fontSize: '16px' }}>
//           -
//         </button>
//         <span style={{ margin: '0 10px' }}>{quantity}</span>
//         <button onClick={increaseQuantity} style={{ border: 'none', background: 'transparent', fontSize: '16px' }}>
//           +
//         </button>
//       </div>

//       {/* Add to Cart Button */}
//       <button 
//         style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #000' }} 
//         onClick={addToCart()}>
//         Add To Cart
//       </button>

//       {/* Compare Button */}
//       <button 
//         style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #000' }}>
//         + Compare
//       </button>

//       {/* Cart Popup */}
//       <CartPopup 
//         cartItems={cartItems} 
//         removeFromCart={removeFromCart} 
//         isOpen={isCartOpen} 
//         toggleCart={toggleCart} 
//       />
//     </div>
//   );
// }

// export default ProductControls;






// import React, { useState } from 'react';
// import CartPopup from './CartPopup'; // Adjust the import path accordingly

function ProductControls({ id, product }) {
  const [quantity, setQuantity] = useState(1);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log("pc", product); // Logs the product object
  // Convert product object into an array of key-value pairs
  const products = Object.entries(product);
  console.log("pc0", products); // Logs the product array

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { id, ...product, quantity }];
    });

    setIsCartOpen(true); // Automatically open the cart when an item is added
  };

  console.log("quantity", quantity, "cartItems", cartItems);

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='product-control-section'>
      {/* Counter Component */}
      <div className='product-control-section-INC-DEC-section'>
        <button onClick={decreaseQuantity}  className='product-control-section-DEC-btn'  >
          -
        </button>
        <span style={{ margin: '0 10px' }}>{quantity}</span>
        <button onClick={increaseQuantity} className='product-control-section-INC-btn'>
          +
        </button>
      </div>

      {/* Add to Cart Button */}
      <button 
        className='product-control-section-ATC-btn'
        onClick={addToCart} // Pass a reference to the function, not the result of the function
      >
        Add To Cart
      </button>

      {/* Compare Button */}
      <button 
        className='product-control-section-CMP-btn'>
        + Compare
      </button>

      {/* Cart Popup */}
      <CartPopup 
        cartItems={cartItems} 
        removeFromCart={removeFromCart} 
        isOpen={isCartOpen} 
        toggleCart={toggleCart} 
      />
    </div>
  );
}

export default ProductControls;















// import React, { useState } from 'react';

// function ProductControls({id,product}) {

//   const [quantity, setQuantity] = useState(1);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const [cartItems, setCartItems] = useState([]);

//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((i) => i.id === item.id);
//       if (existingItem) {
//         return prevItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prevItems, { ...item, quantity: 1 }];
//     });
//     setIsCartOpen(true); 
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   return (
//     <div style={{ display: 'flex', gap: '10px', alignItems: 'center', width: "100%" , }}>
      
     
//       <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #000', borderRadius: '5px', padding: '5px' }}>
        
//         <button onClick={decreaseQuantity}  style={{ border: 'none', background: 'transparent', fontSize: '16px' }} >
//           -
//         </button>

//         <span style={{ margin: '0 10px' }}>{quantity}</span>

//         <button onClick={increaseQuantity}  style={{ border: 'none', background: 'transparent', fontSize: '16px' }} >
//           +
//         </button>

//       </div>


       
//       <button style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #000' }} onClick={(id)=>addToCart(id)}>
//         Add To Cart
//       </button>

       
//       <button style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #000' }}>
//         + Compare
//       </button>
//     </div>
//   );
// }

// export default ProductControls;
// 



// import React, { useState } from 'react';

// function ProductControls({ id, product }) {
//   const [quantity, setQuantity] = useState(1);
//   const [cartItems, setCartItems] = useState([]);
//   const [isCartOpen, setIsCartOpen] = useState(false);

//   const increaseQuantity = () => {
//     setQuantity(quantity + 1);
//   };

//   const decreaseQuantity = () => {
//     if (quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const addToCart = () => {
//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((i) => i.id === id);
//       if (existingItem) {
//         return prevItems.map((i) =>
//           i.id === id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prevItems, { id, ...product, quantity }];
//     });
//     setIsCartOpen(true); // Automatically open the cart when an item is added
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const toggleCart = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   return (
//     <div style={{ display: 'flex', gap: '10px', alignItems: 'center', width: "100%" }}>
//       {/* Counter Component */}
//       <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #000', borderRadius: '5px', padding: '5px' }}>
//         <button onClick={decreaseQuantity} style={{ border: 'none', background: 'transparent', fontSize: '16px' }}>
//           -
//         </button>
//         <span style={{ margin: '0 10px' }}>{quantity}</span>
//         <button onClick={increaseQuantity} style={{ border: 'none', background: 'transparent', fontSize: '16px' }}>
//           +
//         </button>
//       </div>

//       {/* Add to Cart Button */}
//       <button style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #000' }} onClick={addToCart}>
//         Add To Cart
//       </button>

//       {/* Compare Button */}
//       <button style={{ padding: '10px 20px', borderRadius: '10px', border: '1px solid #000' }}>
//         + Compare
//       </button>
//     </div>
//   );
// }

// export default ProductControls;

