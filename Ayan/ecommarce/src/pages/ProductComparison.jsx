
import './styles/productsCompare.css'
 
import img1 from '../assets/productcompare/image.png';
import img2 from '../assets/productcompare/image2.png';
import Breadcrumb from '../components/Breadcrumb'
import ComparisonTable from '../components/ComparisonTable';
const ProductCompare = () => {
  return (
      <>
        <Breadcrumb pageName={"Product Comparison"} />

        <div className="product-compare">
          <ProductLayout />

          <ComparisonTable/>
          
          
        </div>
      </>
  );
}

export default ProductCompare;

const ProductLayout = () => {
  return (
    <div className="product-layout">
      
      <div className="product-layout-sidebar">
        <p>Go to Product page for more Products</p>
        <a href="/products" className="view-more">View More</a>
      </div>

      <div className="products">
        <ProductCard 
          title="Asgaard Sofa" 
          price="Rs. 250,000.00" 
          rating={4.7} 
          reviews={204} 
          imageUrl={img1} 
        />
        <ProductCard 
          title="Outdoor Sofa Set" 
          price="Rs. 224,000.00" 
          rating={4.2} 
          reviews={145} 
          imageUrl={img2}  
        />
      </div>
      <div className="add-product">
        <p>Add A Product</p>
        <button className="choose-product-button">Choose a Product <span>&#9662;</span></button>
      </div>
    </div>
  );
}

// export default ProductLayout;

const ProductCard = ({ title, price, rating, reviews, imageUrl }) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <div className="rating">
        <span>{rating} &#9733;</span>
        <p>{reviews} Review{reviews > 1 ? 's' : ''}</p>
      </div>
    </div>
  );
}


 





























































































// import React from 'react'
// import Breadcrumb from '../components/Breadcrumb'
// const ProductComparison = () => {
//   return (
//     <div>
//       <Breadcrumb pageName={"Product Comparison"} />
//       <div className="product-compare-section">
//         <div className="product-compare-wrapper">
//             <div className="product-compare-upper-section">
//             </div>
//             <div className="product-compare-compare-section">             
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductComparison

 

/** */
// import img1 from '../assets/productcompare/image.png';
// import img2 from '../assets/productcompare/image2.png';
// import './styles/productsCompare.css'

// const ProductComparison = () => {
//   return (
//     <div className="product-compare">
//       {/* Product Listing Section */}
//       {/* <ProductLayout /> */}
      
//       {/* Product Comparison Section */}
//       <ComparisonTable />
//     </div>
//   );
// }

// export default ProductComparison;

// const ComparisonTable = () => {
//   const data = {
//     general: [
//       { title: "Sales Package", value1: "1 sectional sofa", value2: "1 Three Seater, 2 Single Seater" },
//       { title: "Model Number", value1: "TFCLBIGRBL6SRHS", value2: "DTUBLIGRBL568" },
//       { title: "Secondary Material", value1: "Solid Wood", value2: "Solid Wood" },
//       { title: "Configuration", value1: "L-shaped", value2: "L-shaped" },
//       { title: "Upholstery Material", value1: "Fabric + Cotton", value2: "Fabric + Cotton" },
//       { title: "Upholstery Color", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
//     ],
//     product: [
//       { title: "Filling Material", value1: "Foam", value2: "Matte" },
//       { title: "Finish Type", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
//       { title: "Adjustable Headrest", value1: "No", value2: "Yes" },
//       { title: "Maximum Load Capacity", value1: "280 KG", value2: "300 KG" },
//       { title: "Origin of Manufacture", value1: "India", value2: "India" },
//     ]
//   };

//   return (
//     <div className="comparison-table">
//       {/* <ProductComparison title="General" items={data.general} />
//       <ProductComparison title="Product" items={data.product} /> */}
//     </div>
//   );
// }

// import React from 'react';
// import ProductCard from './ProductCard';


// const ProductLayout = () => {
//   return (
//     <div className="product-layout">
//       <div className="sidebar">
//         <p>Go to Product page for more Products</p>
//         <a href="/products" className="view-more">View More</a>
//       </div>
//       <div className="products">
//         <ProductCard 
//           title="Asgaard Sofa" 
//           price="Rs. 250,000.00" 
//           rating={4.7} 
//           reviews={204} 
//           imageUrl={img1} 
//         />
//         <ProductCard 
//           title="Outdoor Sofa Set" 
//           price="Rs. 224,000.00" 
//           rating={4.2} 
//           reviews={145} 
//           imageUrl={img2} 
//         />
//       </div>
//       <div className="add-product">
//         <p>Add A Product</p>
//         <button className="choose-product-button">Choose a Product <span>&#9662;</span></button>
//       </div>
//     </div>
//   );
// }

// export default ProductLayout;
// import React from 'react';

// const ProductCard = ({ title, price, rating, reviews, imageUrl }) => {
//   return (
//     <div className="product-card">
//       <img src={imageUrl} alt={title} />
//       <h3>{title}</h3>
//       <p>{price}</p>
//       <div className="rating">
//         <span>{rating} &#9733;</span>
//         <p>{reviews} Review{reviews > 1 ? 's' : ''}</p>
//       </div>
//     </div>
//   );
// }

// export default ProductCard;





// const ProductComparison = ({ title, items }) => {
//   return (
//     <div className="product-comparison">
//       <h2>{title}</h2>
//       <div className="comparison-items">
//         {items.map((item, index) => (
//           <div key={index} className="comparison-row">
//             <div className="comparison-title">{item.title}</div>
//             <div className="comparison-value">{item.value1}</div>
//             <div className="comparison-value">{item.value2}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductComparison;