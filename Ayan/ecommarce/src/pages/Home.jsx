import React from 'react'


// import './styles/home.css'
import HomeImage from '../assets/home page image.jpeg'
import Card2 from '../components/Card2'
import Breadcrumb from '../components/Breadcrumb'



const Home = () => {
  return (
    <>    
        <div className="container">
            <div className="wrapper-section">

              <div className="upper-img">
                <img src={HomeImage} alt=" " srcset="" />
              </div>

            <div className="browse-section">
              <div className="browse-wrapper">
                <div className="heading">
                  <h2>Browse The Range</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="card-section">
                  <Card2/>
                  <Card2/>  
                  <Card2/>  
                  <Card2/>  
                </div>

              </div>
            </div>  

            <div className="product-section">
              <div className="product-wrapper">
             
              </div>
            </div>
 
            </div>
        </div>
    </ >
  )
}

export default Home