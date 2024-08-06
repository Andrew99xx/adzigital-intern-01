// import React, { useState } from 'react';

// const CartPopup = ({ cartItems, removeFromCart }) => {
//   const calculateTotal = () => {
//     return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//   };

//   return (
//     <div style={styles.cartPopup}>
//       <h2 style={styles.title}>Shopping Cart</h2>
//       <div style={styles.cartItemsContainer}>
//         {cartItems.map((item) => (
//           <div key={item.id} style={styles.cartItem}>
//             <img src={item.image} alt={item.name} style={styles.itemImage} />
//             <div style={styles.itemDetails}>
//               <h4>{item.name}</h4>
//               <p>
//                 {item.quantity} x Rs. {item.price.toFixed(2)}
//               </p>
//             </div>
//             <button style={styles.removeItem} onClick={() => removeFromCart(item.id)}>×</button>
//           </div>
//         ))}
//       </div>
//       <div style={styles.totalSection}>
//         <p>Subtotal</p>
//         <h3>Rs. {calculateTotal().toFixed(2)}</h3>
//       </div>
//       <div style={styles.actionButtons}>
//         <button style={styles.checkoutButton}>Checkout</button>
//       </div>
//     </div>
//   );
// };

// // Example styling, you can modify according to your needs
// const styles = {
//   cartPopup: {
//     position: 'fixed',
//     left: '0',
//     top: '0',
//     width: '300px',
//     height: '100%',
//     backgroundColor: 'white',
//     boxShadow: '2px 0 5px rgba(0,0,0,0.3)',
//     padding: '20px',
//     zIndex: '1000',
//     overflowY: 'auto',
//   },
//   title: {
//     marginBottom: '20px',
//   },
//   cartItemsContainer: {
//     marginBottom: '20px',
//   },
//   cartItem: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '15px',
//   },
//   itemImage: {
//     width: '50px',
//     height: '50px',
//     borderRadius: '8px',
//   },
//   itemDetails: {
//     flex: '1',
//     marginLeft: '10px',
//   },
//   removeItem: {
//     backgroundColor: 'transparent',
//     border: 'none',
//     fontSize: '20px',
//     cursor: 'pointer',
//   },
//   totalSection: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: '20px',
//   },
//   actionButtons: {
//     textAlign: 'center',
//   },
//   checkoutButton: {
//     backgroundColor: '#000',
//     color: '#fff',
//     padding: '10px 20px',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   },
// };

// export default CartPopup;
import React, { useState } from 'react';

const CartPopup = ({ cartItems, removeFromCart, isOpen, toggleCart }) => {
  const calculateTotal = () => {
      // return cartItems.reduce((acc, item) => acc + item.product.itemPrice * item.quantity, 0);// this fpr parent component
     return cartItems.reduce((acc, item) => acc + item.itemPrice * item.quantity, 0);// this for product control 

  };
  console.log("citem",cartItems);
  

  return (
    <div style={{ ...styles.cartPopup, right: isOpen ? '0' : '-100%' }}>
      <div style={styles.header}>
        <h2 style={styles.title}>Shopping Cart</h2>
        <button style={styles.closeButton} onClick={toggleCart}>×</button>
      </div>
      <div style={styles.cartItemsContainer}>
        {cartItems.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <img src={item.images[0]} alt={item.name} style={styles.itemImage} />
            <div style={styles.itemDetails}>
              <h4>{item.name}</h4>
              <p>
                {/* {item.quantity} x Rs. {item.price.toFixed(2)} */}
                {/* {item.quantity} x Rs. {item.product.itemPrice} */}
                {item.quantity} x Rs. {item.itemPrice}


              </p>
            </div>
            <button style={styles.removeItem} onClick={() => removeFromCart(item.id)}>×</button>
          </div>
        ))}
      </div>
      <div style={styles.totalSection}>
        <p>Subtotal</p>
        <h3>Rs. {calculateTotal()}</h3>
      </div>
      <div style={styles.actionButtons}>
        <button style={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
};

const styles = {
  cartPopup: {
    position: 'fixed',
    top: '0',
    right: '0',
    width: '300px',
    height: '50%',
    backgroundColor: 'white',
    boxShadow: '-2px 0 5px rgba(0,0,0,0.3)',
    padding: '20px',
    zIndex: '1000',
    overflowY: 'auto',
    transition: 'right 0.3s ease-in-out',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  title: {
    margin: '0',
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
  cartItemsContainer: {
    marginBottom: '20px',
  },
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '15px',
  },
  itemImage: {
    width: '50px',
    height: '50px',
    borderRadius: '8px',
  },
  itemDetails: {
    flex: '1',
    marginLeft: '10px',
  },
  removeItem: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '20px',
    cursor: 'pointer',
  },
  totalSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  actionButtons: {
    textAlign: 'center',
  },
  checkoutButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default CartPopup;

