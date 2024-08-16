
const data = {
  general: [
    { title: "Sales Package", value1: "1 sectional sofa", value2: "1 Three Seater, 2 Single Seater" },
    { title: "Model Number", value1: "TFCLBIGRBL6SRHS", value2: "DTUBLIGRBL568" },
    { title: "Secondary Material", value1: "Solid Wood", value2: "Solid Wood" },
    { title: "Configuration", value1: "L-shaped", value2: "L-shaped" },
    { title: "Upholstery Material", value1: "Fabric + Cotton", value2: "Fabric + Cotton" },
    { title: "Upholstery Color", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
  ],
  product: [
    { title: "Filling Material", value1: "Foam", value2: "Matte" },
    { title: "Finish Type", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
    { title: "Adjustable Headrest", value1: "No", value2: "Yes" },
    { title: "Maximum Load Capacity", value1: "280 KG", value2: "300 KG" },
    { title: "Origin of Manufacture", value1: "India", value2: "India" },
  ],
  product1: [
    { title: "Filling Material", value1: "Foam", value2: "Matte" },
    { title: "Finish Type", value1: "Bright Grey & Lion", value2: "Bright Grey & Lion" },
    { title: "Adjustable Headrest", value1: "No", value2: "Yes" },
    { title: "Maximum Load Capacity", value1: "280 KG", value2: "300 KG" },
    { title: "Origin of Manufacture", value1: "India", value2: "India" },
  ],
  dimention: [
    { title: "Width", value1: "265.32 cm", value2: "265.32 cm" },
    { title: "Height", value1: "76cm", value2: "76cm" },
    { title: "Adjustable Headrest", value1: "No", value2: "Yes" },
    { title: "Maximum Load Capacity", value1: "280 KG", value2: "300 KG" },
    { title: "Origin of Manufacture", value1: "India", value2: "India" },
  ],

};

 const ComparisonTable = () => {
  
    return (
      <div className="comparison-table">
        <ProductComparison title="General" items={data.general} />
        <ProductComparison title="Product" items={data.product} />
        <ProductComparison title="Dimention" items={data.dimention} />
        <ProductComparison title="Warrenty" items={data.dimention} />
       
          
        <div className="add-to-cart-buttons">
                <button className="add-to-cart-btn">Add To Cart</button>
                <button className="add-to-cart-btn">Add To Cart</button>
            </div>
       
    </div>  
    );
  }
  export default ComparisonTable;


  const ProductComparison = ({ title, items }) => {
    return (
      <div className="product-comparison">
        <h2>{title}</h2>
        <div className="comparison-items">
          {items.map((item, index) => (
            <div key={index} className="comparison-row">
              <div className="comparison-title">{item.title}</div>
              <div className="comparison-value">{item.value1}</div>
              <div className="comparison-value">{item.value2}</div>
                
              
            </div>

          ))}

           
        
        
        </div>
        
      </div>
    );
  }