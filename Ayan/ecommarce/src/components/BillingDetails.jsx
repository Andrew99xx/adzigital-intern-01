// BillingDetails.jsx
 
import './style/billingDetails.css';

const BillingDetails = () => {
  return (
    <div className="billing-details">
      <div className="billing-details-head">

        <h2>Billing details</h2>
      </div>

               
      <form className='form-groups'>
        <div className="form-group">
          
          <div className="name-fields">
            <div className="form-group">
              <div className="input-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" />
              </div>
              <div className="input-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </div>
            </div>
          
          </div>
        </div>


        
        <div className="input-group">
          <label>Country / Region</label>
          <select name="country" className='select'>
            <option value="sri-lanka">Sri Lanka</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="input-group">
          <label>Street address</label>
          <input type="text" name="streetAddress" />
        </div>
        <div className="input-group">
          <label>Town / City</label>
          <input type="text" name="city" />
        </div>
        <div className="input-group">
          <label>Province</label>
          <select name="province" className='select'>
            <option value="western-province">Western Province</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="input-group">
          <label>ZIP code</label>
          <input type="text" name="zipCode" />
        </div>
        <div className="input-group">
          <label>Phone</label>
          <input type="tel" name="phone" />
        </div>
        <div className="input-group">
          <label>Email address</label>
          <input type="email" name="email" />
        </div>
        <div className="input-group">
          {/* <label>Additional Information</label> */}
          <textarea name="additionalInfo" className='form-group-textarea'></textarea>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
