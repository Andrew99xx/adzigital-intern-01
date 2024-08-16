import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import Features from '../components/Features';
import './styles/contact.css';
import locationIcon from '../assets/contact/location-pin.svg';
import call from '../assets/contact/call.png';
import clock from '../assets/contact/clock.png';

const contactDetailsData = [
  {
    icon: locationIcon,
    title: 'Address',
    details: ['236 5th SE Avenue, New York NY10000, United States'],
  },
  {
    icon: call,
    title: 'Phone',
    details: ['Mobile: +(84) 546-6789', 'Hotline: +(84) 456-6789'],
  },
  {
    icon: clock,
    title: 'Working Time',
    details: ['Monday-Friday: 9:00 - 22:00', 'Saturday-Sunday: 9:00 - 21:00'],
  },
];

const formData = [
  { label: 'Your name', type: 'text', name: 'name', placeholder: 'Abc' },
  { label: 'Email address', type: 'email', name: 'email', placeholder: 'Abc@def.com' },
  { label: 'Subject', type: 'text', name: 'subject', placeholder: 'This is an optional' },
  { label: 'Message', type: 'textarea', name: 'message', placeholder: 'Hi! I’d like to ask about' },
];

const Contact = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formValues);
  };

  return (
    <>
      <Breadcrumb pageName={"Contact"} />

      <div className="contact-info">
        <h2>Get In Touch With Us</h2>
        <p>
          For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-details">
          {contactDetailsData.map((item, index) => (
            <div className="detail-item" key={index}>
              <span className="icon">
                <img src={item.icon} alt={item.title} />
              </span>
              <div>
                <h4>{item.title}</h4>
                {item.details.map((detail, detailIndex) => (
                  <p key={detailIndex}>{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {formData.map((field, index) => (
              <FormGroup
                key={index}
                label={field.label}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={formValues[field.name]}
                onChange={handleChange}
              />
            ))}
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
      </div>

      <Features />
    </>
  );
};

export default Contact;

const FormGroup = ({ label, type, name, placeholder, value, onChange }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      {type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

// const Contact = () => {
//   return (
//     <>
//     <Breadcrumb pageName={"Cart"}/>
    

//     <div className="contact-info">
//         <h2>Get In Touch With Us</h2>
//         <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
//     </div>
    
//     <div className="contact-container">
      
//         <div className="contact-details">
//           <div className="detail-item">
//             <span className="icon"><img src={locationIcon} alt="" /></span>
//             <div>
//               <h4>Address</h4>
//               <p>236 5th SE Avenue, New York NY10000, United States</p>
//             </div>
//           </div>
//           <div className="detail-item">
//             <span className="icon"><img src={call} alt="" /></span>
//             <div>
//               <h4>Phone</h4>
//               <p>Mobile: +(84) 546-6789</p>
//               <p>Hotline: +(84) 456-6789</p>
//             </div>
//           </div>
//           <div className="detail-item">
//             <span className="icon"><img src={clock} alt="" /></span>
//             <div>
//               <h4>Working Time</h4>
//               <p>Monday-Friday: 9:00 - 22:00</p>
//               <p>Saturday-Sunday: 9:00 - 21:00</p>
//             </div>
//           </div>
//         </div>
      

//       <div className="contact-form">
//         <form>
//           <div className="form-group">
//             <label>Your name</label>
//             <input type="text" placeholder="Abc" />
//           </div>
//           <div className="form-group">
//             <label>Email address</label>
//             <input type="email" placeholder="Abc@def.com" />
//           </div>
//           <div className="form-group">
//             <label>Subject</label>
//             <input type="text" placeholder="This is an optional" />
//           </div>
//           <div className="form-group">
//             <label>Message</label>
//             <textarea placeholder="Hi! I’d like to ask about"></textarea>
//           </div>
//           <button type="submit" className="submit-button">Submit</button>
//         </form>
//       </div>

//     </div>
//     <Features/>

//     </>
//   );
// };

