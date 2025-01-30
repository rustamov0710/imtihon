import React, { useEffect, useState } from 'react';
import './SideBar.css';
import { NavLink, Outlet } from 'react-router-dom';

const categories = ["House Plants", "Potter Plants", "Seeds", "Small Plants", "Big Plants", "Succulents", "Terrariums", "Gardening", "Accessories"];

const SideBar = () => {

  

  return (
    <>
      <section className="flex container gap-6 p-6 ">

        <div className="">
        <div className="w-[310px]">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            {categories.map((category, index) => (
              <li
                key={index}
                className="py-2 text-gray-700 cursor-pointer hover:text-green-500"
              >
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
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Small
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Medium
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Large
              </label>
            </div>
          </div>
          
        </div>
          <img src="./sale_banner.png" alt="sale banner" className='h-[470px] mt-[30px]' />
        </div>

        <div className="flex-1">
          <nav className="flex items-center gap-8 mb-6">
            <NavLink
              to="/"
              end
              className="h-[26px] text-gray-600 hover:text-green-600 block lg:inline"
            >
              All Plants
            </NavLink>
            <NavLink
              to="/new"
              className="h-[26px] text-gray-600 hover:text-green-600 block lg:inline"
            >
              New Arrivals
            </NavLink>
            <NavLink
              to="/sale"
              className="h-[26px] text-gray-600 hover:text-green-600 block lg:inline"
            >
              Sale
            </NavLink>
          </nav>

          <Outlet />
        </div>
      </section>
    </>
  );
};

export default SideBar;
