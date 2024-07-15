import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="About">
      <div className="About_col_1">
        <img src="path/to/your/image.jpg" alt="About Me" />
      </div>
      <div className="About_col_2">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </section>
  );
};

export default About;
