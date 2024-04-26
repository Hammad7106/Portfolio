import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'; 
import Education from '../Education/Education'

function About() {
  const [typedfrontend, setfrontend] = useState('');
  const [typedbackend, setbackend] = useState('');

  const textToType = 'HTML5, CSS3, Javascript, Reactjs, Bootstrap, Tailwind CSS';
  const backendtotype = "Django, REST API's, Django Rest Framework, Django Channels";

  useEffect(() => {
    const timerFrontend = setTimeout(() => {
      typeTextFrontend(textToType);
    }, 100);

    const timerBackend = setTimeout(() => {
      typeTextBackend(backendtotype);
    }, 100);

    return () => {
      clearTimeout(timerFrontend);
      clearTimeout(timerBackend);
    };
  }, []); // Run only once when the component mounts

  const typeTextFrontend = (text) => {
    if (text.length > 0) {
      setfrontend((prevText) => prevText + text[0]);
      setTimeout(() => {
        typeTextFrontend(text.slice(1));
      }, 30); // Adjust typing speed here (milliseconds)
    }
  };

  const typeTextBackend = (text) => {
    if (text.length > 0) {
      setbackend((prevText) => prevText + text[0]);
      setTimeout(() => {
        typeTextBackend(text.slice(1));
      }, 30); // Adjust typing speed here (milliseconds)
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar/>
      <div
        className="bg-cover bg-center relative h-screen"
        
      >
        <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
           
            <p className="mt-4 text-gray-900 font-serif">
              Greetings, I am Hammad, a dedicated 7th-semester BSCS student. I
              am a passionate full-stack Django developer with extensive
              experience in building dynamic web applications. With a strong
              background in front-end and back-end development, I excel in
              creating responsive and scalable solutions.
            </p>
          </div>
          <div className="mt-10">
            <h3 className="text-gray-900 font-semibold">Skills & Expertise</h3>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <li className="bg-white bg-opacity-75 shadow rounded-lg px-6 py-4">
                <h4 className="text-gray-900 font-bold mb-2">
                  Frontend Development
                </h4>
                <p className="text-gray-900">{typedfrontend}</p>
              </li>
              <li className="bg-white bg-opacity-75 shadow rounded-lg px-6 py-4">
                <h4 className="text-gray-900 font-bold mb-2">
                  Backend Development
                </h4>
                <p className="text-gray-900">{typedbackend}</p>
              </li>
            </ul>
          </div>
          <Education/>
          <div className="mt-10 text-center">
            <p className="text-lg text-gray-900">Let's work together to bring your ideas to life!</p>
            <a
              href="/contact"
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 hover:bg-blue-600 mt-4"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
