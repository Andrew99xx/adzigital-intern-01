import React, { useState, useEffect } from 'react';
// import { db } from './firebase'; // Import your Firebase configuration
import './style/sizeSelector.css'
function SizeSelector({id,product}) {
  const [selectedSize, setSelectedSize] = useState('');

  // Fetch sizes from Firebase
//   useEffect(() => {
//     const fetchSizes = async () => {
//       try {
//         const sizesSnapshot = await db.collection('products').doc('yourProductId').get();
//         const sizesData = sizesSnapshot.data().sizes;
//         setSizes(sizesData);
//       } catch (error) {
//         console.error('Error fetching sizes:', error);
//       }
//     };

//     fetchSizes();
//   }, []);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className='size-selector-wrapper'>
      <p className='size-selector-p'>Size</p>

      <div className='size-selector-sizes'>
        {product.sizes.map((size, index) => (
          <button 
            key={index}
            onClick={() => handleSizeClick(size)}
            className='size-selector-sizes-btn'
            style={{
              backgroundColor: selectedSize === size ? '#b68b43' : '#f7f0e7',
              color: selectedSize === size ? '#fff' : '#000',
            }}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SizeSelector;
