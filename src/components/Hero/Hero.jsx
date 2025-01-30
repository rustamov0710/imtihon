import React from "react";
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero bg-[#f9f9f9] w-full mb-[50px]">
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        {/* Left Side: Text */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <span className="text-gray-600 block text-sm md:text-base">
            WELCOME TO GREENSHOP
          </span>
          <h1 className="text-4xl font-extrabold md:text-5xl leading-snug text-[#3D3D3D]">
            LET'S MAKE A BETTER <span className="text-green-600">PLANET</span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create a unique Urban Jungle. Order
            your favorite plants!
          </p>
          <button className="bg-green-600 text-white text-sm md:text-base font-bold py-2 px-6 rounded-lg hover:bg-green-700">
            SHOP NOW
          </button>
        </div>
        {/* Right Side: Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="./hero_flower.png"
            alt="Hero Plant"
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
