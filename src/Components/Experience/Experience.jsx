import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion library
import certificate from "../Picture/Internee.jpeg";
import groupPhoto from "../Picture/Batch.jpeg";
import Navbar from '../Navbar/Navbar';

function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0 }} // Initial animation values
      animate={{ opacity: 1 }} // Animation when component is mounted
      exit={{ opacity: 0 }} // Animation when component is unmounted
      className="h-screen flex flex-col items-center "
    >
      <Navbar />
      <motion.div
        initial={{ y: -50, opacity: 0 }} // Initial animation values
        animate={{ y: 0, opacity: 1 }} // Animation when component is mounted
        transition={{ type: 'spring', stiffness: 100, delay: 0.5 }} // Transition type and duration
        className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center"
      >
        <div className="text-center">
          <div className="flex flex-col sm:flex-row justify-between">
            <div className="mb-8 sm:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900">Internship</h2>
              <p className="mt-1 text-lg font-bold text-gray-600">Software Engineer Intern</p>
            </div>
            <div className="mb-8 sm:mb-0">
              <h2 className="text-3xl font-extrabold text-gray-900">Company</h2>
              <p className="mt-1 text-lg font-bold text-gray-600">Devsinc</p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Duration</h2>
              <p className="mt-1 text-lg font-bold text-gray-600">July 2023 - September 2023</p>
            </div>
          </div>
          <p className="mt-4 text-lg font-bold text-gray-600">
            During my internship, I worked as a software engineer intern and focused on backend web development using Python Django. I gained valuable experience in building dynamic web applications, and my interest in this field has grown significantly. Now, I have the confidence to delve deeper into this field and explore further possibilities.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0 }} // Initial animation values
          animate={{ opacity: 1 }} // Animation when component is mounted
          transition={{ delay: 1 }} // Delay animation
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          <motion.div
            initial={{ scale: 0 }} // Initial animation values
            animate={{ scale: 1 }} // Animation when component is mounted
            transition={{ type: 'spring', stiffness: 100, delay: 1.5 }} // Transition type and duration
            className="bg-white shadow overflow-hidden rounded-lg"
          >
            <img src={certificate} alt="Certificate 1" className="w-full h-auto" />
          </motion.div>
          <motion.div
            initial={{ scale: 0 }} // Initial animation values
            animate={{ scale: 1 }} // Animation when component is mounted
            transition={{ type: 'spring', stiffness: 100, delay: 1.5 }} // Transition type and duration
            className="bg-white shadow overflow-hidden rounded-lg"
          >
            <img src={groupPhoto} alt="Certificate 2" className="w-full h-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Experience;
