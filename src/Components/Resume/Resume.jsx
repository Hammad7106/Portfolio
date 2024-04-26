import React from 'react';
import Navbar from '../Navbar/Navbar';
const Resume = () => {
  return (
    <>
    <Navbar />
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden', marginTop: '30px' }}>
      <iframe
        title="Resume"
        src="https://drive.google.com/file/d/12f-rGhLATPERMKjbQJPVhAH_NQTQ6sfR/view?usp=sharing"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
    </>
  );
};

export default Resume;
