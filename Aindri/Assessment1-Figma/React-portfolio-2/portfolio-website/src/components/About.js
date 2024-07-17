import React from 'react';
import './About.css';

function About() {
  const tablinks = document.getElementsByClassName("Tab_links");
  const tabcontents = document.getElementsByClassName("Tab_contents");

  // Define the Open_tab function
  const openTab = (tabname, event) => {
    for (let tablink of tablinks) {
      tablink.classList.remove("Active_link");
    }
    for (let tabcontent of tabcontents) {
      tabcontent.classList.remove("Active_tab");
    }
    event.currentTarget.classList.add("Active_link");
    document.getElementById(tabname).classList.add("Active_tab");
  };

  return (
    <div id="About">
      <div className="Container">
        <div className="Row">
          <div className="About_col_1">
            <img src="images/portfolio2.png" alt="About" />
          </div>
          <div className="About_col_2">
            <h1 className="Sub_title">ABOUT ME</h1>
            <p>
              Hey! I'm Aindri Ghoshal, an independent creative web developer and coder from Heritage Institute of Technology, Kolkata. Still learning and upgrading myself.
            </p>
            <div className="Tab_titles">
              <p className="Tab_links" onClick={(event) => openTab('Education', event)}>Education</p>
              <p className="Tab_links Active_link" onClick={(event) => openTab('Skills', event)}>Skills</p>
              <p className="Tab_links" onClick={(event) => openTab('Experience', event)}>Experience</p>
              <p className="Tab_links" onClick={(event) => openTab('Projects', event)}>Project work</p>
            </div>
            <div className="Tab_contents" id="Education">
              <ul>
                <li><span>2018-2021</span><br />Diploma in Electrical Engineering at Technique Polytechnic Institute, Hooghly</li>
                <li><span>2021-2024</span><br />B Tech in Information Technology from Heritage Institute of Technology, Kolkata.</li>
              </ul>
            </div>
            <div className="Tab_contents Active_tab" id="Skills">
              <ul>
                <li><span>Machine Learning</span><br />Algorithms to imitate the way that humans learn.</li>
                <li><span>Web Development</span><br />Web app Development</li>
                <li><span>Programming</span><br />C++, Java, Python Programming</li>
              </ul>
            </div>
            <div className="Tab_contents" id="Experience">
              <ul>
                <li><span>2019</span><br />Humanoid Robotics with IOT at IIT Kharagpur by Techobyte.</li>
                <li><span>2020</span><br />Solar Photo Voltaic by SLIEM Solar.</li>
              </ul>
            </div>
            <div className="Tab_contents" id="Projects">
              <ul>
                <li><span>2020-2021</span><br />Cost estimation & fabrication of LPG Gas detection & fire alarm system.</li>
                <li><span>2020-2021</span><br />Design of water level indicator along with automatic water pump control system.</li>
                <li><span>2022</span><br />Railway Reservation System Website.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
