import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section id="Services">
      <h2>My Services</h2>
      <div className="Service">
        <h3>Service 1</h3>
        <p>Description of Service 1.</p>
      </div>
      <div className="Service">
        <h3>Service 2</h3>
        <p>Description of Service 2.</p>
      </div>
      <div className="Service">
        <h3>Service 3</h3>
        <p>Description of Service 3.</p>
      </div>
    </section>
  );
};

export default Services;
