import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";
import myPicture from "../Picture/Hamad.jpg";
import linkedIn from "../Picture/LinkedIn.jpg";
import Gmail from "../Picture/Gmail.jpg";
import Github from "../Picture/Github.png";
import Navbar from '../Navbar/Navbar';

function Home() {
  const [typedText, setTypedText] = useState('');
  const textToType = " Hi! I am Hammad. A Full Stack Web Developer.";

  useEffect(() => {
    const timer = setTimeout(() => {
      typeText(textToType);
    }, 100);

    return () => clearTimeout(timer);
  }, []); // Run only once when the component mounts

  const typeText = (text) => {
    if (text.length > 0) {
      setTypedText(prevText => prevText + text[0]);
      setTimeout(() => {
        typeText(text.slice(1));
      }, 50); // Adjust typing speed here (milliseconds)
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <div className="flex-grow flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-black text-center relative z-10"
        >
          <img 
            src={myPicture}
            alt="My Picture"
            className="w-48 h-48 rounded-full mb-4 mx-auto"
          />
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mt-4 mb-8"
          >
            {typedText}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-1xl font-semibold mb-8 mx-auto max-w-md"
          >
            Motivated and results-oriented individual seeking to leverage leadership and technical skills in a challenging and competitive environment. Eager to contribute to a team while expanding expertise and acquiring new skillsets.
          </motion.p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://www.linkedin.com/in/hammad-mubeen-14b81625a/" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                src={linkedIn}
                alt="LinkedIn"
                className="w-10 h-10 cursor-pointer"
              />
            </a>
            <a href="mailto:hammadmubeen430@gmail.com" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                src={Gmail}
                alt="Gmail"
                className="w-10 h-10 cursor-pointer"
              />
            </a>
            <a href="https://github.com/Hammad7106" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                src={Github}
                alt="Github"
                className="w-10 h-10 cursor-pointer"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
