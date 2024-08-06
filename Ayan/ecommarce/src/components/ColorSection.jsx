
import React, { useState } from 'react';
import   './style/colorSection.css'

const ColorSection = ({ id, product }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className='color-section-wrapper'>
      
      <p className='color-section-p'>
        
        {product.itemColor.map((curColor, index) => (
          <button
            key={index}
            onClick={() => handleColorSelect(curColor)}
            className='color-section-colors'

            style={{
              backgroundColor: curColor,
              border: selectedColor === curColor ? '2px solid black' : 'none',
            }}
          >
            {/* {selectedColor === curColor && (
              <span
                style={{
                  content: '',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: 'white',
                }}
              />
            )} */}
          </button>
        ))}
      </p>
    </div>
  );
};

export default ColorSection;


// import React from 'react'

// const ColorSection = ({id,product}) => {
//   return (
//     <div className='Colors'>
//       <p style={{ display: 'flex', gap: '5px' }}>
   
//   {product.itemColor.map((curColor, index) => (
//     <button 
//       key={index} 
//       style={{ 
//         backgroundColor: curColor, 
//         width: '20px', 
//         height: '20px', 
//         borderRadius: '50%', 
//         color: 'white', 
//         border: 'none' 
//       }}
//     >
//     </button>
//   ))}
// </p>

//     </div>
//   )
// }

// export default ColorSection