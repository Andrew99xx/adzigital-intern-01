

import { useState, useRef } from 'react';

import {db, imageDb} from '../Firebase/firebaseSdk';
import {v4} from 'uuid';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'


import './styles/uploadProduct.css';
import { addDoc, collection } from 'firebase/firestore';
const initialValues = {
    productName: "",
    productDescription: "",
    productCategory:"",
    subCategory: "",
    inventoryQuantity:"",
    inventorySKU:"",
    itemWeight:"",
    itemSizeLength:"",
    itemSizeBreadth:"",
    itemSizeHeight:"",
    itemPrice:"",

    
};

const UploadProduct = () => {
    const [images, setImages] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef(null);

    const [values ,setValues ] = useState(initialValues)



    // Image Upload Section
    const selectFiles = () => {
        fileInputRef.current.click();
    };

    const onFileSelect = (event) => {
        const files = event.target.files;
        if (files.length === 0) {
            return;
        }
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages, files[i]
    
                ]);
            }
        }
    };

    const deleteImage = (index) => {
        setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const onDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
        event.dataTransfer.dropEffect = 'copy';
    };

    const onDragLeave = (event) => {
        event.preventDefault();
        setIsDragging(false);
    };

    const onDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const files = event.dataTransfer.files;
        for (let i = 0; i < files.length; i++) {
            if (files[i].type.split('/')[0] !== 'image') continue;
            if (!images.some((e) => e.name === files[i].name)) {
                setImages((prevImages) => [
                    ...prevImages,
                    {
                        name: files[i].name,
                        url: URL.createObjectURL(files[i]),
                    },
                ]);
            }
        }
    };

    const handleInputChange = (event) =>{
        const {name ,value} = event.target;
        setValues({
            ...values,
            [name]:value,
        })
    } 
    const handleUpload = async () => {
        try {

            console.log("images",images);
            console.log("values",values);
            const imageUrls = await Promise.all(
                images.map(async (image) => {
                    const imageRef = ref(imageDb, `productImages/${v4()}-${image.name}`);
                    await uploadBytes(imageRef, image);
                    return await getDownloadURL(imageRef);
                })
            );

            const productData = { ...values, images: imageUrls };
            await addDoc(collection(db, 'productDetails'), productData);
            alert("Product added successfully");

            // Clear the form
            setImages([]);
            setValues(initialValues);
        } catch (error) {
            console.error("Error uploading product:", error);
        }
        // try {
        //     console.log("images",images);
        //     console.log("values",values);
        //     const imageUrls = await Promise.all(
        //         images.map(async (image) => {
        //             const imageRef = ref(imageDb, `images/${v4()}-${image.name}`);
        //             await uploadBytes(imageRef, image.file);
        //             const url = await getDownloadURL(imageRef);
        //             return url;
        //         })
        //     );

        //     const productData = {
        //         ...values,
        //         images: imageUrls,
        //     };

        //     await addDoc(collection(db  , 'products'), productData);

        //     console.log("Product added successfully");
        // } catch (error) {
        //     console.error("Error uploading product:", error);
        // }
    };
    // const handleUpload = () =>{
    //     console.log("image",images);
    //     console.log("values",values);

    //     const imgs = ref(imageDb,`productImages/${v4()}`);
    //     uploadBytes(imgs,images).then(data=>{
    //         console.log(data,"imgs");
    //     })

    // }


    return (
        <div className="main-container">
            <div className="wrapping-container">
                <div className="right-section">
                    <div className="description-product">
                        <h2>Description</h2>
                        <div className="card">
                            <h6>Product Name</h6>
                            <input type="text"  name='productName' value={values.productName}onChange={handleInputChange}/>
                            <h6>Product Description</h6>
                            <textarea name='productDescription' value={values.productDescription}onChange={handleInputChange}></textarea>
                        </div>
                    </div>

                    <div className="description-product">
                        <h2>Category</h2>
                        <div className="card">
                            <h6>Product Category</h6>
                            <input type="text" name='productCategory' value={values.productCategory}onChange={handleInputChange}/>
                            <h6>Sub Category</h6>
                            <input type="text" name='subCategory' value={values.subCategory} onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="description-product">
                        <h2>Inventory</h2>
                        <div className="card inventory">
                            <div className="d1">
                                <h6>Quantity</h6>
                                <input type="text" name='inventoryQuantity' value={values.inventoryQuantity}onChange={handleInputChange}/>
                            </div>
                            <div className="d2">
                                <h6>SKU</h6>
                                <input type="text" name='inventorySKU' value={values.inventorySKU} onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="left-section">
                    <div className="product-image">
                        <div className="top">Product image Upload</div>
                        <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                            {isDragging ? (
                                <span className="select">Drop image here</span>
                            ) : (
                                <>
                                    Drag and Drop image here or{" "}
                                    <span className="select" role="button" onClick={selectFiles}>
                                        Browse
                                    </span>
                                </>
                            )}
                            <input type="file" name="file" className="file" multiple ref={fileInputRef} onChange={onFileSelect} />
                        </div>
                        <div className="container">
                            {images.map((image, index) => (
                                <div className="image" key={index}>
                                    <span className="delete" onClick={() => deleteImage(index)}>&times;</span>
                                    <img src={image.url} alt={image.name} />
                                </div>
                            ))}
                        </div>
                        <button type="button">Upload</button>
                    </div>

                    <div className="shipping-section">
                        <div className="card">
                            <h6>Item Weight</h6>
                            <input type="text" name='itemWeight' value={values.itemWeight}onChange={handleInputChange}/>
                            <h5>Item Size</h5>
                            <div className="sizes">
                                <div className="size">
                                    <h6>Length</h6>
                                    <input type="text" name='itemSizeLength' value={values.itemSizeLength}onChange={handleInputChange}/>
                                </div>
                                <div className="size">
                                    <h6>Breadth</h6>
                                    <input type="text" name='itemSizeBreadth' value={values.itemSizeBreadth}onChange={handleInputChange}/>
                                </div>
                                <div className="size">
                                    <h6>Height</h6>
                                    <input type="text" name='itemSizeHeight' value={values.itemSizeHeight}onChange={handleInputChange}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-section">
                        <div className="card">
                            <h6>Price</h6>
                            <input type="text" name='itemPrice' value={values.itemPrice}onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="buttons">
                        <button className="btn1">Clear</button>
                        <button className="btn2" onClick={handleUpload}>Add Product</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadProduct;



/* not working code */
// import { useState,useRef } from 'react'
// import './styles/uploadProduct.css'
// const UploadProduct = () => {


//     const [images,setImages] = useState([]);
//     const [isDragging, setIsDragging] = useState(false);
//     const fileInputRef = useRef(null);

//     const selectFiles = () =>{
//         fileInputRef.current.click();
//     }

//     const onFileSelect = (event) =>{
//         const files = event.target.files;
//         if(files.length===0){
//             return
//         }
//         for (let i = 0; i < files.length; i++) {
//             if(files[i].type.split('/')[0] !== 'image') continue;
//             if(!images.some((e)=>e.name === files[i].name)){
//                 setImages((prevImage)=>[
//                     ...prevImage,
//                     {
//                         name:files[i].name,
//                         url:URL.createObjectURL(files[i])
//                     }
//                 ])
//             }
            
//         }
//     }


//     const deleteImage = (index) =>{
//         setImages((prevImage)=>
//             prevImage.filter((_,i)=> i !== index)
//         )
//     }

//     const onDragOver = (event) =>{
//             event.preventDefault();
//             setIsDragging(true);
//             event.dataTransfer.dropEffect = 'copy';

//     }
//     const onDragLeave = (event) =>{
//         event.preventDefault();
//         setIsDragging(false)
//     }
//     const onDrop = (event) =>{
//         event.preventDefault();
//         setIsDragging(false);
//         const files = event.dataTransfer.dropEffect.files;
//         for (let i = 0; i < files.length; i++) {
//             if(files[i].type.split('/')[0] !== 'image') continue;
//             if(!images.some((e)=>e.name === files[i].name)){
//                 setImages((prevImage)=>[
//                     ...prevImage,
//                     {
//                         name:files[i].name,
//                         url:URL.createObjectURL(files[i])
//                     }
//                 ])
//             }
            
//         }
//     }


//   return (
//     <div className="main-container">
//         <div className="wapping-container">

//             <div className="right-section">

//                     <div className="description-product">
//                         <h2>Description</h2>
                            
//                         <div className="card">
//                             <h6>Product Name</h6>
//                             <input type="text" />
//                             <h6>Product Description</h6>
//                             <textarea name="" id=""></textarea>
//                         </div>

//                     </div>


//                     <div className="description-product">
//                         <h2>Category</h2>
                            
//                         <div className="card">
//                             <h6>Product Category</h6>
//                             <input type="text" />
//                             <h6>Sub Category</h6>
//                             <input type="text" />
                            
//                         </div>

//                     </div>

//                     <div className="description-product">
//                         <h2>Inventory</h2>
                            
//                         <div className="card inventory">
//                             <div className="d1">
//                                 <h6>Quantity</h6>
//                                 <input type="text" />
                                

//                             </div>
//                             <div className="d2">
//                                 <h6>SKU</h6>
//                                 <input type="text" />
                            

//                             </div>
                        
                                
                             

                            
                             
//                         </div>

//                     </div>

                     
//             </div>

//             <div className="left-section">

//                 <div className="product-image">
                    
//                 <div className="top">
//                     Product image Upload
//                 </div>
//                 <div className="drag-area" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
                    
//                     { isDragging? (
//                                 <span className='select'>Drop image here </span>
//                             ): ( 
//                                 <>
//                                     Drag and Drop image here or {" "}
//                                     <span className='select' role='button' onClick={selectFiles}>
//                                         Browse
//                                     </span>
//                                 </>
//                             )
//                     }
                       
//                     <input type="file" name="file" className='file' multiple  ref={fileInputRef} onChange={onFileSelect} />
//                 </div>
//                 <div className="container">
//                     {
//                         images.map((image,index)=>(

//                             // eslint-disable-next-line react/jsx-key
//                             <div className="image" key ={index}>
//                                 <span className='delete' onClick={()=>deleteImage(index)}>&times;</span>
//                                 <img src={image.url} alt={image.name} />
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <button type='button'>Upload</button>

//                 </div>
                
//                 <div className="shipping-section">
//                     <div className="card">
//                         <h6>Items Weight</h6>
//                         <input type="text" />
//                         <h5>Item Size</h5>
//                         <div className="sizes">
//                             <div className="size">
//                                 <h6>Length</h6>
//                                 <input type="text" name="" id="" />
//                             </div>
//                             <div className="size">
//                                 <h6>Breadth</h6>
//                                 <input type="text" name="" id="" />
//                             </div>
//                             <div className="size">
//                                 <h6>Length</h6>
//                                 <input type="text" name="" id="" />
//                             </div>
//                         </div>
//                     </div>

//                 </div>

//                 <div className="pricing-section">
//                             <div className="card">
//                                 <h6>Price</h6>
//                                 <input type="text" name="" id="" />
//                             </div>
//                 </div>



//                 <div className="buttons">
//                     <button className='btn1'>Clear</button> 
//                     <button className='btn2'>Add Product</button>
//                 </div>
                        

//             </div>



//         </div>
//     </div>
//   )
// }

// export default UploadProduct