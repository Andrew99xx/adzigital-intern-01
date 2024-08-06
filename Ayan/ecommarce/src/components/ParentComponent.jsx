// import React, { useState } from 'react';
// import CartPopup from './CartPopup'; // Adjust the import path accordingly

// const ParentComponent = () => {
//   const [cartItems, setCartItems] = useState([]);

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
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   return (
//     <div>
//       {/* Your main content goes here */}

//       {/* Example of adding an item */}
//       <button onClick={() => addToCart({ id: 1, name: 'Asgaard sofa', image: 'path/to/image.jpg', price: 250000 })}>
//         Add Asgaard sofa to Cart
//       </button>

//       {/* Cart Popup */}
//       <CartPopup cartItems={cartItems} removeFromCart={removeFromCart} />
//     </div>
//   );
// };

// export default ParentComponent;




import React, { useEffect, useState } from 'react';
import CartPopup from './CartPopup'; // Adjust the import path accordingly
import { useLocation } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase/firebaseSdk';
import Breadcrumb from './Breadcrumb';

const ParentComponent = () => {
 
  
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [product, setProduct] = useState(null);    
    let location = useLocation();
    console.log(location.pathname);
    const id = location.pathname.split('/').pop();
    console.log(id); 

    /* */
    
    /* */
  useEffect(() => {
    const fetchProductById = async () => {
      try {
        // Get a reference to the specific document by ID
        const productRef = doc(db, 'productDetails', id);
        
        // Fetch the document
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
          // The document exists, so get the data
          const productData = { id: productSnap.id, ...productSnap.data() };
          console.log("Product Data:", productData);
          setProduct(productData);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProductById();
  }, [id]);

    console.log("Product",product);

    // if (!product || !product.images) {
    //     return <div>Loading...</div>;
    // }


  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true); // Automatically open the cart when an item is added
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      {/* Your main content goes here */}
      
      {/* Example of adding an item */}
      {/* <button onClick={() => addToCart({ id: 1, name: 'Asgaard sofa', image: 'path/to/image.jpg', price: 250000 },{ id: 1, name: 'Asgaard sofa', image: 'path/to/image.jpg', price: 250000 },{ id: 1, name: 'Asgaard sofa', image: 'path/to/image.jpg', price: 250000 })}> */}
      <button onClick={() => addToCart({product})}>
      
        Add Asgaard sofa to Cart
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
};

export default ParentComponent;
