import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const categories = [
  "House Plants", "Potter Plants", "Seeds", "Small Plants", "Big Plants", "Succulents", "Terrariums", "Gardening", "Accessories"
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="container mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* Sidebar */}
      <div className="md:w-[310px] w-full md:block flex flex-col md:relative">
        <button 
          className="md:hidden flex items-center gap-2 text-green-600 font-semibold mb-4" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <FiMenu size={24} /> Categories
        </button>
        
        <div className={`${isOpen ? 'block' : 'hidden'} md:block bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 rounded-md md:rounded-none`}>  
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li key={index} className="py-2 text-gray-700 cursor-pointer hover:text-green-500">
                {category}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Price Range</h3>
            <input type="range" min="39" max="1230" className="w-full" />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-2">Size</h3>
            <div className="space-y-2">
              {['Small', 'Medium', 'Large'].map((size, index) => (
                <label key={index} className="flex items-center">
                  <input type="checkbox" className="mr-2" /> {size}
                </label>
              ))}
            </div>
          </div>
        </div>
        
        <img src="./sale_banner.png" alt="sale banner" className='h-[470px] md:h-[470px] mt-4' />
      </div>

      {/* Content */}
      <div className="flex-1">
        <nav className="flex flex-wrap items-center gap-4 md:gap-8 mb-6">
            <NavLink
              to='/'
              className="text-gray-600 hover:text-green-600 block"
            >
              All Plants
            </NavLink>
            <NavLink
              to='/new'
              className="text-gray-600 hover:text-green-600 block"
            >
              New Arrivals
            </NavLink>
            <NavLink
              to='/sale'
              className="text-gray-600 hover:text-green-600 block"
            >
              Sale
            </NavLink>
        </nav>
        <Outlet />
      </div>
    </section>
  );
};

export default SideBar;
