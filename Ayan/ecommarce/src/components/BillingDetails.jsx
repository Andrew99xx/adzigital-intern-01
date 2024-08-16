import React, { useState } from 'react';
import './style/billingDetails.css';
import countryOptions from '../data/countryOptions'


const provinceOptions = [
  { value: 'western-province', label: 'Western Province' },
  // Add more provinces as needed
];

const BillingDetails = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    country: '',
    streetAddress: '',
    city: '',
    province: '',
    zipCode: '',
    phone: '',
    email: '',
    additionalInfo: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <div className="billing-details">
      <div className="billing-details-head">
        <h2>Billing details</h2>
      </div>
      <form className='form-groups'>
        <div className="name-fields">
          <InputGroup
            label="First Name"
            name="firstName"
            value={formValues.firstName}
            onChange={handleInputChange}
          />
          <InputGroup
            label="Last Name"
            name="lastName"
            value={formValues.lastName}
            onChange={handleInputChange}
          />
        </div>
        <SelectGroup
          label="Country / Region"
          name="country"
          options={countryOptions}
          value={formValues.country}
          onChange={handleInputChange}
        />
        <InputGroup
          label="Street address"
          name="streetAddress"
          value={formValues.streetAddress}
          onChange={handleInputChange}
        />
        <InputGroup
          label="Town / City"
          name="city"
          value={formValues.city}
          onChange={handleInputChange}
        />
        <SelectGroup
          label="Province"
          name="province"
          options={provinceOptions}
          value={formValues.province}
          onChange={handleInputChange}
        />
        <InputGroup
          label="ZIP code"
          name="zipCode"
          value={formValues.zipCode}
          onChange={handleInputChange}
        />
        <InputGroup
          label="Phone"
          name="phone"
          type="tel"
          value={formValues.phone}
          onChange={handleInputChange}
        />
        <InputGroup
          label="Email address"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleInputChange}
        />
        <div className="input-group">
          <textarea
            name="additionalInfo"
            className='form-group-textarea'
            value={formValues.additionalInfo}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;

const SelectGroup = ({ label, name, options, value, onChange }) => (
  <div className="input-group">
    <label htmlFor={name}>{label}</label>
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className='select'
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);
const InputGroup = ({ label, type = "text", name, id, value, onChange }) => (
  <div className="input-group">
    <label htmlFor={id || name}>{label}</label>
    <input
      type={type}
      name={name}
      id={id || name}
      value={value}
      onChange={onChange}
    />
  </div>
);











// import './style/billingDetails.css';

// const BillingDetails = () => {
//   return (
//     <div className="billing-details">
//       <div className="billing-details-head">

//         <h2>Billing details</h2>
//       </div>

               
//       <form className='form-groups'>
//         <div className="form-group">
          
//           <div className="name-fields">
//             <div className="form-group">
//               <div className="input-group">
//                 <label htmlFor="firstName">First Name</label>
//                 <input type="text" id="firstName" name="firstName" />
//               </div>
//               <div className="input-group">
//                 <label htmlFor="lastName">Last Name</label>
//                 <input type="text" id="lastName" name="lastName" />
//               </div>
//             </div>
          
//           </div>
//         </div>


        
//         <div className="input-group">
//           <label>Country / Region</label>
//           <select name="country" className='select'>
//             <option value="sri-lanka">Sri Lanka</option>
            
//           </select>
//         </div>

//         <div className="input-group">
//           <label>Street address</label>
//           <input type="text" name="streetAddress" />
//         </div>
//         <div className="input-group">
//           <label>Town / City</label>
//           <input type="text" name="city" />
//         </div>

//         <div className="input-group">
//           <label>Province</label>
//           <select name="province" className='select'>
//             <option value="western-province">Western Province</option>
             
//           </select>
//         </div>

//         <div className="input-group">
//           <label>ZIP code</label>
//           <input type="text" name="zipCode" />
//         </div>
//         <div className="input-group">
//           <label>Phone</label>
//           <input type="tel" name="phone" />
//         </div>
//         <div className="input-group">
//           <label>Email address</label>
//           <input type="email" name="email" />
//         </div>
//         <div className="input-group">
           
//           <textarea name="additionalInfo" className='form-group-textarea'></textarea>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BillingDetails;
