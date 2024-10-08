import React, { useState ,useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../Firebase/firebaseSdk'
// import s1 from '../assets/s1.png'
// import bi from '../assets/bi.png'

import ColorSection from '../components/ColorSection'
import ProductControls from '../components/ProductControls'
import SizeSelector from '../components/SizeSelector'

import linkedinicon from '../assets/svg-icons/linkedin.svg'
import tweetericon from '../assets/svg-icons/tweeter.svg'

import facebookicon from '../assets/svg-icons/akar-icons_facebook-fill.svg'
import star from '../assets/star.png'
import mask from '../assets/Mask group.png'
import "./styles/singleProduct.css"

const SingleProduct = () => {
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

    if (!product || !product.images) {
        return <div>Loading...</div>;
    }

  return (
    <div>
         
        <div className="single-product-section">
            <div className="single-product-wrapper">


                <div className="single-product-upper-section">
                    <div className="single-product-upper-section-wrapper">
                        <div className="single-product-upper-section-small-img">
                                <img src={product.images[1]} alt="" srcset="" />
                                <img src={product.images[2]} alt="" srcset="" />
                                <img src={product.images[3]} alt="" srcset="" />
                                <img src={product.images[3]} alt="" srcset="" />
                        </div> 
                        <div className="single-product-upper-section-big-img">
                            <img src={product.images[0]} alt="" srcset="" />
                        </div>
                        <div className="single-product-upper-section-details">
                            <h5>{product.productName}</h5>

                            <h6>Rs.&nbsp;{product.itemPrice}</h6>

                            <div className="single-product-upper-section-review">
                                <div className="single-product-upper-section-review-star">  
                                    <img src={star} alt="" srcset="" />
                                    <img src={star} alt="" srcset="" />
                                    <img src={star} alt="" srcset="" />
                                    <img src={star} alt="" srcset="" />
                                    <img src={star} alt="" srcset="" />
                                </div>
                                <div className="single-product-upper-section-review-NOC">
                                    <p>5 Customer Review</p>
                                </div>
                            </div>
                            <div className="single-product-upper-section-product-description">                             
                                <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, veritatis? highs for a sound.</p>
                            </div>

                            <div className="single-product-upper-section-product-size">
                                {/* <div className="single-product-upper-section-review-size-box"> */}
                                <SizeSelector id={id} product={product}/>
                                    {/* <div className="single-product-upper-section-review-sizes">
                                        <p>XL</p>
                                    </div>
                                    <div className="single-product-upper-section-review-sizes">
                                        <p>XL</p>
                                    </div>
                                    <div className="single-product-upper-section-review-sizes">
                                        <p>XL</p>
                                    </div>
                                    <div className="single-product-upper-section-review-sizes">
                                        <p>XL</p>
                                    </div> */}
                                {/* </div> */}
                            </div>
                            
                            <div className="single-product-upper-section-product-colors">
                                <h6>Color</h6>
                                <ColorSection id={id} product={product}/>         
                            </div>

                            <div className="single-product-upper-section-add-to-cart-btn-section">
                                     
                                <ProductControls id={id} product={product}/>
                            </div>
                            <hr />
                            <div className="single-product-upper-section-product-tags">
                                <div className="p-tag">
                                    <div className="p-tag-l">SKU</div> 
                                    <div className="p-tag-r">: {product.inventorySKU}</div>     
                                </div>
                                <div className="p-tag">
                                    <div className="p-tag-l">Category</div> 
                                    <div className="p-tag-r">:{product.productCategory }</div>
                                </div>
                                <div className="p-tag">
                                    <div className="p-tag-l">Tags</div> 
                                    <div className="p-tag-r">: Sofa,Chair,Home,Shop</div>
                                </div>
                                <div className="p-tag">
                                    <div className="p-tag-l">Share</div> 
                                    <div className="p-tag-r">: 
                                        <img src={facebookicon} alt="" srcset="" />
                                        <img src={linkedinicon} alt="" srcset="" />
                                        <img src={tweetericon} alt="" srcset="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>




                    {/* NOT DONE */}
                <div className="single-product-middle-section">
                        <div className="single-product-middle-wrapper-section">
                            <div className="single-product-middle-section-heading">
                                <h5>Description</h5>
                                <h5>Additional Information</h5>
                                <h5>Review</h5>

                            </div>
                            <div className="single-product-middle-section-details">
                                <p>Lorem, ipsum dolor sit amet c Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum alias praesentium saepe similique minus voluptas natus eaque quaerat, ex est facilis id placeat reiciendis distinctio ut necessitatibus qui iure ipsum incidunt. Quibusdam odio pariatur architecto nam animi beatae laudantium delectus expedita tenetur labore cupiditate in, error, at nobis adipisci fuga non mollitia. Totam unde soluta eos iusto nesciunt, quo exercitationem sit ipsa non est officiis ex, explicabo perspiciatis? At perspiciatis cumque sed ex, blanditiis alias, ipsa, ut possimus laborum expedita corporis. Ullam mollitia quas amet, dicta impedit provident expedita adipisci odit maxime unde nam excepturi dignissimos modi illo repellendus. onsectetur adipisicing elit. Recusandae earum eligendi, neque modi, provident distinctio culpa eveniet nihil ullam expedita consectetur asperiores, cupiditate quibusdam beatae!</p>
                            </div>
                            <div className="single-product-middle-section-image">
                                <img src={mask} alt="" srcset="" />
                            
                                <img src={mask} alt="" srcset="" />
                            </div>

                        </div>
                </div>

                <div className="single-product-lower-section">
                    <div className="single-product-lower-wrapper">
                        <h5>Related Products</h5>
                         <div className="single-product-lower-card">

                         </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct;
















































/*
return (
    <div>
        <div className="single-product-section">
            <div className="single-product-wrapper">


                <div className="upper-section">
                    <div className="upper-section-wrapper">
                        <div className="small-img">
                                <img src={s1} alt="" srcset="" />
                                <img src={s1} alt="" srcset="" />
                                <img src={s1} alt="" srcset="" />
                                <img src={s1} alt="" srcset="" />
                        </div> 
                        <div className="big-img">
                            <img src={bi} alt="" srcset="" />
                        </div>
                        <div className="details-img">
                            <h5>Asgaard sofa</h5>
                            <h6>Rs. 250,000.00</h6>
                            <div className="review">
                                <div className="star">  
                                    <img src={star} alt="" srcset="" />
                                    <img src={star} alt="" srcset="" />
                                    <img src={star} alt="" srcset="" />
                                    <img src={star} alt="" srcset="" />
                                    <img src={star} alt="" srcset="" />
                                </div>
                                <div className="NOC">
                                <p>5 Customer Review</p>
                                </div>
                            </div>
                            <div className="pd">                             
                                <p>Setting the bar asadsd Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem culpa, maiores dolore, reprehenderit hic facere rem dolorum consequuntur iusto voluptas optio officiis aut magnam illo?
                                    s one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                            </div>
                            <div className="size">
                                <h6>Size</h6>
                                <div className="size-box">
                                    <div className="sizes">
                                        <p>XL</p>
                                    </div>
                                    <div className="sizes">
                                        <p>XL</p>
                                    </div>
                                    <div className="sizes">
                                        <p>XL</p>
                                    </div>
                                    <div className="sizes">
                                        <p>XL</p>
                                    </div>

                                </div>
                            </div>
                            <div className="product-color">
                                <h6>Color</h6>
                                <div className="colors">
                                    <div className="color">
                                        <p>b</p>
                                    </div>
                                    <div className="color">
                                        <p>g</p>
                                    </div>
                                    <div className="color">
                                        <p>r</p>
                                    </div>
                                </div>
                            </div>
                            <div className="add-to-cart-btn-section">
                                    <div className="increase-btn">
                                        <button>IN CS</button>
                                    </div>
                                    <div className="add-cart-btn">
                                        <button>Add TO Cart</button>
                                    </div>
                            </div>



                            <div className="product-tags">
                                <div className="p-tag">SKU : SSOI</div>
                                <div className="p-tag">Category:Sofa</div>
                                <div className="p-tag">Tags: Sofa,Chair,Home,Shop</div>
                                <div className="p-tag">Share :</div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="single-product-middle-section">
                        <div className="single-product-middle-wrapper-section">
                            <div className="single-product-middle-section-heading">
                                <h5>Description</h5>
                                <h5>Additional Information</h5>
                                <h5>Review</h5>

                            </div>
                            <div className="single-product-middle-section-details">
                                <p>Lorem, ipsum dolor sit amet c Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptatum alias praesentium saepe similique minus voluptas natus eaque quaerat, ex est facilis id placeat reiciendis distinctio ut necessitatibus qui iure ipsum incidunt. Quibusdam odio pariatur architecto nam animi beatae laudantium delectus expedita tenetur labore cupiditate in, error, at nobis adipisci fuga non mollitia. Totam unde soluta eos iusto nesciunt, quo exercitationem sit ipsa non est officiis ex, explicabo perspiciatis? At perspiciatis cumque sed ex, blanditiis alias, ipsa, ut possimus laborum expedita corporis. Ullam mollitia quas amet, dicta impedit provident expedita adipisci odit maxime unde nam excepturi dignissimos modi illo repellendus. onsectetur adipisicing elit. Recusandae earum eligendi, neque modi, provident distinctio culpa eveniet nihil ullam expedita consectetur asperiores, cupiditate quibusdam beatae!</p>
                            </div>
                            <div className="single-product-middle-section-image">
                                <img src={mask} alt="" srcset="" />
                            
                                <img src={mask} alt="" srcset="" />
                            </div>

                        </div>
                </div>

                <div className="single-product-lower-section">
                    <div className="single-product-lower-wrapper">
                        <h5>Related Products</h5>
                         <div className="single-product-lower-card">

                         </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct;


*/