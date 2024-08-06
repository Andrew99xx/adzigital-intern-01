// import { data } from '../data/detils.js'; // Adjust the import path as necessary

import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from '../Firebase/firebaseSdk';

import './styles/shop.css'
import Card from '../components/Card';  
import Breadcrumb from '../components/Breadcrumb';  



const Shop = () => {

  const [products, setProducts] = useState([]);
  

    useEffect(() => {
      const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, 'productDetails'));
        console.log(querySnapshot);
        
        // querySnapshot.forEach((doc) => {
        //   console.log(doc.id); // Log the document ID
        // });

        // const productsData = querySnapshot.docs.map((doc) => doc.data());
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        console.log("productsData",productsData);
        setProducts(productsData);
    };
    fetchProducts();
    }, []);
     


  return (
    <>
      {/* <div className="nav">
        <NavBar/>
      </div> */}
      <Breadcrumb/>
      <div className="main">
         
        <div className="warp-card">
        {products.map((product) => (
          <Card 
             
            id={product.id} 
            picture={product.images[0]} 
            name={product.productName} 
            details={product.productCategory} 
            price={product.itemPrice} 
            />
          ))
        }

        </div>
          
      </div>
          
    </>
  );
};

export default Shop;
































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