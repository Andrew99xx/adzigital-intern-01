import React, { useEffect } from 'react';
import './Header.css';

const Header = () => {
    useEffect(() => {
        // Fetch elements once component is mounted
        const sidebarToggle = document.getElementById('sidebar-toggle');
        const sidebar = document.getElementById('sidebar');

        // Add an event listener to the sidebar icon
        sidebarToggle.addEventListener('click', () => {
            // Toggle the show class on the sidebar menu
            sidebar.classList.toggle('show');
        });

        // Clean up the event listener on component unmount
        return () => {
            sidebarToggle.removeEventListener('click', () => {
                sidebar.classList.toggle('show');
            });
        };
    }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className="Header" id="Header">
      <div className="Container">
        <div className="side">
          <button className="sidebar-toggle" id="sidebar-toggle">
            <i className="fa-solid fa-bars" aria-hidden="true"></i>
          </button>
          <nav className="sidebar" id="sidebar">
            <ul>
              <li><a href="#Header">Home</a></li>
              <li><a href="#Services">Service</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Contact">Education</a></li>
            </ul>
          </nav>
        </div>
        <div className="Header_Text">
          <p>&lt;Coder&gt; & &lt;Developer&gt;</p>
          <h1>Hi, I'm <span>Aindri</span><br />Ghoshal From India</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
