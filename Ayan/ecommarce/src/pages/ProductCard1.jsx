 

const ProductCard1 = ({ product }) => {
  const { name, description, price, oldPrice, discount, badge, image } = product;

  return (
    // <div className="product-card">
    <div className="card-container">

      {/* <div className="product-image">
        <img src={image} alt={name} />
        {discount && <span className="discount-badge">-{discount}%</span>}
        {badge && <span className="badge">{badge}</span>}
        <div className="overlay">
          <button>Add to cart</button>
          <div className="actions">
            <span>Share</span>
            <span>Compare</span>
            <span>Like</span>
          </div>
        </div>
      </div>
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">
          Rp {price.toLocaleString()}
          {oldPrice && <span className="old-price">Rp {oldPrice.toLocaleString()}</span>}
        </p>
      </div> */}

      {/* <div className="card-container"> */}
        
        <div className="card-product-image">
          <img src={image} alt={name} />
          {discount && <span className="discount-badge">-{discount}%</span>}
          {badge && <span className="badge">{badge}</span>}
          <div className="card-body">
                <button className='card-btn' >Add to Cart</button>
                <div className="card-body-share">
                  <h1 className='card-title'>Share</h1>
                  <p className='card-sub-title'>Compare</p>
                  <p className='card-info'>Like</p>
                </div>
          </div>
        </div>


       <div className="card-product-description"  >
         

           {/* <h6 className='card-product-description-name'>{name}</h6>
           <p className="card-product-description-details">{description}</p> */}
            {/* <div className="card-product-description-price">

            <p>Rp {price}</p>
            <p>RP  </p>
          </div> */}
          <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">
          Rp {price.toLocaleString()}
          {oldPrice && <span className="old-price">Rp {oldPrice.toLocaleString()}</span>}
        </p>
      </div>
         
        </div>
      
        
      
      

      {/* </div> */}
    </div>
  );
};

export default ProductCard1;
