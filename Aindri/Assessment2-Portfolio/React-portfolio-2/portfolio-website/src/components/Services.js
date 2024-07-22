import React from 'react';
import './Services.css';

function Services() {
  return (
    <div id="Services">
      <div className="Container">
        <h1 className="Sub_title">MY SERVICES</h1>
        <div className="services-list">
          <div>
            <i className="fa-solid fa-code"></i>
            <h2>Web Development</h2>
            <p>
              Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. it's the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.
            </p>
          </div>
          <div>
            <i className="fa-solid fa-crop-simple"></i>
            <h2>Machine Learning</h2>
            <p>
              Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. It enables computers to learn automatically from past data. It is broadly defined as the capability of a machine to imitate intelligent human behavior.
            </p>
          </div>
          <div>
            <i className="fa-brands fa-app-store-ios"></i>
            <h2>Programming</h2>
            <p>
              A programming language is a computer language that is used by programmers (developers) to communicate with computers. It is a set of instructions written in any specific language ( C, C++, Java, Python) to perform a specific task. A programming language is mainly used to develop desktop applications, websites, and mobile applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
