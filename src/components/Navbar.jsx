import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Pages to show in Navbar
  const pages = ["home", "projects", "achievements"];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 bg-white py-4 flex justify-between items-center text-lg transition-shadow duration-300 p-6 md:px-16 xl:px-46 ${
      isScrolled ? 'shadow-sm' : ''
    }`}>
      {/* Logo/Name */}
      <Link to='/' className='flex space-x-2'>
        <img src='/logo.svg' width={25} height={25}/>
        <h1 className="font-bold">Tsheltrim Pemo</h1>
      </Link>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {pages.map((item) => (
          <Link 
            key={item} 
            to={item === "home" ? "/" : `/${item}`}  // home goes to "/" 
          >
            <button className="cursor-pointer relative group capitalize">
              {item}
              <span className="absolute left-0 bg-black right-0 h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </button>
          </Link>
        ))}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden flex flex-col items-center py-4 space-y-4 z-40">
          {pages.map((item) => (
            <Link 
              key={item} 
              to={item === "home" ? "/" : `/${item}`} 
              onClick={closeMenu}
            >
              <button className="cursor-pointer relative group capitalize">
                {item}
                <span className="absolute left-0 bg-black right-0 h-0.5 bottom-0 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;