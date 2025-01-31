import React from 'react';

const About = () => {
  return (
    <section className="container mx-auto px-4 grid gap-10 md:grid-cols-2 items-center">
      {/* First Item */}
      <div className="flex flex-col items-center md:flex-row md:items-center md:gap-6">
        <img src="./img_5.png" alt="flower" className="w-[200px] h-[200px] md:w-[292px] md:h-[292px]" />
        <div className="text-center md:text-right md:w-[290px]">
          <h3 className="text-[18px] leading-[24px] font-extrabold mt-4">SUMMER CACTUS & SUCCULENTS</h3>
          <p className="text-[14px] leading-[24px] font-normal mt-2 text-[#727272]">
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </p>
          <button className="mt-4 w-[142px] px-6 py-2 bg-[#46A358] text-white font-semibold rounded-md hover:bg-green-600">
            Find More →
          </button>
        </div>
      </div>

      {/* Second Item */}
      <div className="flex flex-col items-center md:flex-row md:items-center md:gap-6">
        <img src="./img_3.png" alt="flower" className="w-[200px] h-[200px] md:w-[292px] md:h-[292px]" />
        <div className="text-center md:text-right md:w-[290px]">
          <h3 className="text-[18px] leading-[24px] font-extrabold mt-4">STYLING TRENDS & MUCH MORE</h3>
          <p className="text-[14px] leading-[24px] font-normal mt-2 text-[#727272]">
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </p>
          <button className="mt-4 w-[142px] px-6 py-2 bg-[#46A358] text-white font-semibold rounded-md hover:bg-green-600">
            Find More →
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
