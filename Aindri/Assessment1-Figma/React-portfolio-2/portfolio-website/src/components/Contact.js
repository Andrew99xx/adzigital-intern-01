import React, {useState} from 'react';
import './Contact.css';

function Contact() {
  return (
    <div id="Contact">
      <div className="Container">
        <div className="Row">
          <div className="Contact_left">
            <h1 className="Sub_title">Contact Me</h1>
            <p><i className="fa-solid fa-paper-plane"></i> aindri.ghoshal.it24@heritageit.edu.in</p>
            <p><i className="fa-solid fa-square-phone"></i> +91 9088574729</p>
            <div className="social-icons">
              <a href="https://www.facebook.com/aindri.ghosal?mibextid=ZbWKwL"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://twitter.com/AindriGhoshal?t=s_0FlYeNwGMN8fsklbbWFg&s=08"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://instagram.com/aindri_irl_?igshid=ZDdkNTZiNTM="><i className="fa-brands fa-square-instagram"></i></a>
              <a href="https://www.linkedin.com/in/aindrighoshal0701"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://api.whatsapp.com/send/?phone=%2B919088574729&text=Hello+there%21&type=phone_number&app_absent=0"><i className="fa-brands fa-whatsapp"></i></a>
              <a href="https://www.google.com/maps?q=22.871853,88.424751"><i className="fa-solid fa-location-dot"></i></a>
            </div>
            <a href="/asset/Resume-may23.pdf" target="_blank" rel="noopener noreferrer" download className="btn btn2" id='Download'>Download My CV</a>
          </div>
          <div className="Contact_right">
            <form name="submit-to-google-sheet">
              <input type="text" name="Name" placeholder="Your Name" required />
              <input type="email" name="Email" placeholder="Your Email" required />
              <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            <span id="Msg"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
