import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className='bg-gray-50'>
        <div className="container flex flex-wrap mt-[100px]">
          <ul className='flex flex-wrap items-center w-full md:w-auto'>
            <li className="flex flex-col items-start p-6 border-r w-full md:w-auto">
              <div className="bg-green-100 p-2 rounded-full">
                <img src="./cactus.svg" alt="Cactus" className='w-[83px] h-[85px]' />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">Garden Care</h2>
              <p className="mt-2 text-[14px] text-gray-600 w-full md:w-[204px]">
                We are an online plant shop offering a wide range of cheap and trendy plants.
              </p>
            </li>
            <li className="flex flex-col items-start p-6 border-r w-full md:w-auto">
              <div className="bg-green-100 p-2 rounded-full">
                <img src="./cactus.svg" alt="Cactus" className='w-[83px] h-[85px]' />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">Plant Renovation</h2>
              <p className="mt-2 text-[14px] text-gray-600 w-full md:w-[204px]">
                We are an online plant shop offering a wide range of cheap and trendy plants.
              </p>
            </li>
            <li className="flex flex-col items-start p-6 w-full md:w-auto">
              <div className="bg-green-100 p-2 rounded-full">
                <img src="./choynak.svg" className='w-[83px] h-[85px]' alt="Choynak" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-gray-800">Watering Graden</h2>
              <p className="mt-2 text-[14px] text-gray-600 w-full md:w-[204px]">
                We are an online plant shop offering a wide range of cheap and trendy plants.
              </p>
            </li>
          </ul>
          <div className="p-6 max-w-md mx-auto w-full md:w-auto">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Would you like to join newsletters?</h2>
            <form className="flex items-center rounded-lg shadow-lg">
              <input 
                type="email" 
                placeholder="enter your email address..." 
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring focus:ring-green-300"
              />
              <button 
                type="submit" 
                className="px-6 py-2 bg-green-500 text-white font-semibold rounded-r-lg hover:bg-green-600 transition-colors">
                Join
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-4">
              We usually post offers and challenges in newsletter. We're your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours!
            </p>
          </div>
        </div>
        <div className="container bg-gray-100 p-[25px] flex flex-wrap items-center">
          <div className="text-2xl font-bold text-green-600 flex items-center gap-[5px] mr-[90px]">
            <img src="./logo.svg" alt="logo" />
            GREENSHOP
          </div>
          <ul className="flex flex-wrap items-center gap-[70px] w-full md:w-auto">
            <li className='flex items-center gap-[9px]'>
              <img src="./location.svg" className='w-[20px] h-[20px]' alt="location" />
              70 West Buckingham Ave. <br />
              Farmingdale, NY 11735
            </li>
            <li className='flex items-center gap-[9px]'>
              <img src="./message.svg" className='w-[20px] h-[20px]' alt="message" />
              contact@greenshop.com
            </li>
            <li className='flex items-center gap-[9px]'>
              <img src="./calling.svg" className='w-[20px] h-[20px]' alt="calling" />
              +88 01911 717 490
            </li>
          </ul>
        </div>

        <div className="container flex flex-wrap items-center mt-[33px]">
          <ul className="flex flex-wrap items-center gap-[185px] w-full md:w-auto">
            <li className="flex items-start flex-col w-full md:w-auto">
              <h2 className="text-[18px] font-semibold text-gray-800 mb-[8px]">My Account</h2>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>My Account</p>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>Our stores</p>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>Contact us</p>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>Career</p>
              <p className='text-[14px] text-gray-600 text-start'>Specials</p>
            </li>
            <li className="flex items-start flex-col w-full md:w-auto">
              <h2 className="text-[18px] font-semibold text-gray-800 mb-[8px]">Help & Guide</h2>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>Help Center</p>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>How to Buy</p>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>Shipping & Delivery</p>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>Product Policy</p>
              <p className='text-[14px] text-gray-600 text-start'>How to Return</p>
            </li>
            <li className="flex items-start flex-col w-full md:w-auto">
              <h2 className="text-[18px] font-semibold text-gray-800 mb-[8px]">Categories</h2>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>House Plants</p>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>Potter Plants</p>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>Seeds</p>
              <p className='text-[14px] text-gray-600 text-start mb-[6px]'>Small Plants</p>
              <p className='text-[14px] text-gray-600 text-start'>Accessories</p>
            </li>
          </ul>
          <div className="flex flex-col items-start space-y-6 ml-[175px] my-[33px] w-full md:w-auto">
            <div className="space-y-2">
              <p className="text-sm font-medium">Social Media</p>
              <div className="flex space-x-4">
                <a href="#" className="p-2 rounded-[5px] border border-green bg-green-100 text-green-600">
                  <img src="./Facebook.svg" alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="#" className="p-2 rounded-[5px] border border-green bg-green-100 text-green-600">
                  <img src="./Instagram.svg" alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="#" className="p-2 rounded-[5px] border border-green bg-green-100 text-green-600">
                  <img src="./Twitter.svg" alt="Twitter" className="w-6 h-6" />
                </a>
                <a href="#" className="p-2 rounded-[5px] border border-green bg-green-100 text-green-600">
                  <img src="./Linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
                </a>
                <a href="#" className="p-2 rounded-[5px] border border-green bg-green-100 text-green-600">
                  <img src="./Union.svg" alt="YouTube" className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-[18px] font-semibold text-gray-800">We accept</p>
              <img src="./Cards.png" alt="Cards" />
            </div>
          </div>
        </div>

        <div className="container border-t">
          <p className="text-sm text-gray-600 text-center py-[12px]">
            &copy; 2021 Greenshop. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
