import './styles/shop.css'
import Card from '../components/Card';  
import Breadcrumb from '../components/Breadcrumb';  
import React, { useState } from 'react';
import ProductGrid from './ProductGrid';
import Pagination from './Pagination';
import img from '../assets/Featured Products 2.png'

const products = [
 
  { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, discount: 30, image: img },
  { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, discount: 30, image: img }, 
  { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, discount: 30, image: img }, 
  { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, discount: 30, image: img }, 
  { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, discount: 30, image: img }, 
  { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, discount: 30, image: img }, 
  { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, discount: 30, image: img }, 
  { name: 'Syltherine', description: 'Stylish cafe chair', price: 2500000, oldPrice: 3500000, discount: 30, image: img }, 
   
];

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;  

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <>
    <Breadcrumb pageName={"Shop"}/>
      <div className="products-page">
        <ProductGrid products={currentProducts} />
        {/* <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / productsPerPage)}
          onPageChange={handlePageChange}
          /> */}
      </div>
    </>
  );
};

export default Shop;













































// Stage 222


// // import { data } from '../data/detils.js'; // Adjust the import path as necessary

// import { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import {db} from '../Firebase/firebaseSdk';

// import './styles/shop.css'
// import Card from '../components/Card';  
// import Breadcrumb from '../components/Breadcrumb';  



// const Shop = () => {

//   const [products, setProducts] = useState([]);
  

//     useEffect(() => {
//       const fetchProducts = async () => {
//         const querySnapshot = await getDocs(collection(db, 'productDetails'));
//         console.log(querySnapshot);
        
//         // querySnapshot.forEach((doc) => {
//         //   console.log(doc.id); // Log the document ID
//         // });

//         // const productsData = querySnapshot.docs.map((doc) => doc.data());
//         const productsData = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data()
//         }));
//         console.log("productsData",productsData);
//         setProducts(productsData);
//     };
//     fetchProducts();
//     }, []);
     


//   return (
//     <>
//       {/* <div className="nav">
//         <NavBar/>
//       </div> */}
//       <Breadcrumb/>
//       <div className="main">
         
//         <div className="warp-card">
//         {products.map((product) => (
//           <Card 
             
//             id={product.id} 
//             picture={product.images[0]} 
//             name={product.productName} 
//             details={product.productCategory} 
//             price={product.itemPrice} 
//             />
//           ))
//         }

//         </div>
          
//       </div>
          
//     </>
//   );
// };

// export default Shop;































////-----Stage3 ////----////
// import Card from "../components/Card"
// // import NavBar from "../components/NavBar"
// import  {data} from '../data/detils.js'
 
// const Shop = () => {
//   return (
//     <>
//         <div className="nav">
//             {/* <NavBar/>     */}
//         </div> 
//         <div className="main">
//             {/* <Card/> */}


//            {data.map((d,index)=>{
//               <Card key= {index} picture={d.picture} name={d.name} details={d.details} price={d.price}/>
//            })}
//         </div>
     
     
//     </>
//   )
// }

// export default Shop