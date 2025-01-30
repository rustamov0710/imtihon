import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css';
import logo from '../../assets/logo.svg';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">

        <div className="text-2xl font-bold text-green-600 flex items-center gap-[5px] mr-[10px]">
          <img src={logo} alt="logo" />
          GREENSHOP
        </div>

        

        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-6 absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 top-[70px] lg:top-0 p-4 lg:p-0 shadow-lg lg:shadow-none`}
        >
          <NavLink to="/" className="text-gray-600 hover:text-green-600 block lg:inline">
            Home
          </NavLink>
          <NavLink to="/shop" className="text-gray-600 hover:text-green-600 block lg:inline">
            Shop
          </NavLink>
          <NavLink to="/plant-care" className="text-gray-600 hover:text-green-600 block lg:inline">
            Plant Care
          </NavLink>
          <NavLink to="/blogs" className="text-gray-600 hover:text-green-600 block lg:inline">
            Blogs
          </NavLink>
        </nav>
          {/* Search, Korzinka va Login */}
          <div className="flex items-center space-x-[10px]">
          <div className="relative">
            <button
              className="text-gray-600 w-[20px] h-[20px] hover:text-green-600 mt-[5px]"
            >
              <img src="./search.svg" alt="search_icon" />
            </button>
          </div>
          <button className="text-gray-600 w-[24px] h-[24px] hover:text-green-600">
            <img src="./korzinka.svg" alt="korzinka_icon" />
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded-[6px] flex items-center gap-[5px]">
            <img src="./logout.svg" alt="login_icon" className="w-[20px] h-[20px]" />
            Login
          </button>
          {/* Burger Button (visible only on mobile) */}
        <button
          onClick={toggleMenu}
          className={`ml-[5px] lg:hidden flex flex-col justify-between items-center w-6 h-6 space-y-1 ${menuOpen ? "open" : ""}`}
          aria-label="Toggle menu"
        >
          <span className={`block w-full h-1 bg-gray-600 transition-all`}></span>
          <span className={`block w-full h-1 bg-gray-600 transition-all`}></span>
          <span className={`block w-full h-1 bg-gray-600 transition-all`}></span>
        </button>
          
        </div>
      </div>
    </header>
  );
};

export default Header;
