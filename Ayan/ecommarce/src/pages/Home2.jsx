import React from 'react'


import './styles/home2.css'
import HomeImage from '../assets/home page image.jpeg'
import Card2 from '../components/Card2'
import UpperImage from '../assets/upper-img.png';
// import FeatureImage1 from '../assets/Featured Products1.png';
// import FeatureImage2 from '../assets/Featured Products 2.png';
// import FeatureImage3 from '../assets/Featured Products 3.png';
// import FeatureImage4 from '../assets/Featured Products 4.png';
// import FeatureImage5 from '../assets/Featured Products 5.png';
// import FeatureImage6 from '../assets/Featured Products 6.png';
// import FeatureImage7 from '../assets/Featured Products 7.png';
// import FeatureImage8 from '../assets/Featured Products 8.png';

const Home2 = () => {
  return (
    <> 
        <div className="container">
            <div className="wrapper-section">

              <div className="upper-img">
                <img src={HomeImage} alt=" " srcset="" />
                <div className="New-Arrival">
                  <div>
                  <h3>New Arrival</h3>
                  <h1>Discover Our <br />New Collection</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</h2>
                  </div>
                  <div><button id='btn1'>BUY NOW</button></div>
                </div>
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
                <h1>Our Products</h1>
                <div className="product-wrapper-main">
                <div className="product-wrapper-first">
                  <div className="img1" id='img'></div>
                  <div className="img2" id='img'></div>
                  <div className="img3" id='img'></div>
                  <div className="img4" id='img'></div>
                </div>
                <div className="product-wrapper-second">
                  <div className="img5" id='img'></div>
                  <div className="img6" id='img'></div>
                  <div className="img7" id='img'></div>
                  <div className="img8" id='img'></div>
                </div>
                </div>
                <button id='btn2'>Show More</button>
              </div>
            </div>

            <div className="explore-section">
              <div className="explore1">
                <h1>50+ Beautiful rooms <br /> inspiration</h1>
                <p>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
                <button id='btn1'>Explore More</button>
              </div>
              <div className="explore2">

              </div>
              <div className="explore3">
                <div className='first-explore'>
                  <div className="first-explore-img">
                  </div>
                </div>
                <div className="second-explore"></div>
              </div>
            </div>
            <div className="share">
            </div>

            </div>
        </div>
    </ >
  )
}

export default Home2