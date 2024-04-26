import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Github from "../Picture/Github.png";
import linkedIn from "../Picture/LinkedIn.jpg";
import Gmail from "../Picture/Gmail.jpg";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white py-4 z-10">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            About
          </NavLink>
         
          <NavLink
            to="/projects"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Projects
          </NavLink>
         
          <NavLink
            to="/experience"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Experience
          </NavLink>
          <NavLink
            to="/resume"
            className="nav-link"
            activeClassName="active-nav-link"
          >
            Resume
          </NavLink>
        </div>
        
        {/* Right side of Navbar */}
        <div className="flex items-center space-x-8">
          {/* LinkedIn profile link */}
          <a href="https://www.linkedin.com/in/hammad-mubeen-14b81625a/" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
            <img src={linkedIn} alt="LinkedIn" className="w-8 h-8 cursor-pointer" />
          </a>

          {/* Gmail link */}
          <a href="mailto:hammadmubeen430@gmail.com" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
            <img src={Gmail} alt="Gmail" className="w-8 h-8 cursor-pointer" />
          </a>
          
          {/* GitHub profile link */}
          <a href="https://github.com/Hammad7106" target="_blank" rel="noopener noreferrer" className="rounded-full overflow-hidden">
            <img src={Github} alt="GitHub" className="w-8 h-8 cursor-pointer" />
          </a>

          {/* Hamburger menu button for mobile */}
          <button
            className="block md:hidden text-white focus:outline-none ml-4"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            Dropdown
          </button>
        </div>
        
        {/* Dropdown menu */}
        {isMenuOpen && (
          <div className="absolute top-full right-0 bg-gray-900 mt-2 py-2 w-48 rounded-lg shadow-lg">
            <NavLink
              to="/"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
              activeClassName="active-nav-link"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
              activeClassName="active-nav-link"
              onClick={toggleMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
              activeClassName="active-nav-link"
              onClick={toggleMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/experience"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
              activeClassName="active-nav-link"
              onClick={toggleMenu}
            >
              Experience
            </NavLink>
            <NavLink
              to="/resume"
              className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
              activeClassName="active-nav-link"
              onClick={toggleMenu}
            >
              Resume
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
