import React from 'react'

const About = () => {
  return (
    <section className='flex container gap-[80px]'>
        <div className="flex items-center">
            <img src="./img_5.png" alt="flower" className='w-[292px] h-[292px]' />
            <div className="flex flex-col w-[290px]">
            <h3 className="text-[18px] leading-[24px] ml-auto w-[250px] text-end font-[900] mt-4">SUMMER CACTUS & SUCCULENTS</h3>
        <p className="text-[14px] leading-[24px] ml-auto text-end font-[400] mt-2 text-[#727272]">
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </p>
        <button className="mt-4 w-[142px] ml-auto px-6 py-2 bg-[#46A358] text-white font-semibold rounded-md hover:bg-green-600">
          Find More →
        </button>
            </div>
        </div>


        <div className="flex items-center">
            <img src="./img_3.png" alt="flower" className='w-[292px] h-[292px]' />
            <div className="flex flex-col w-[290px]">
            <h3 className="text-[18px] leading-[24px] ml-auto w-[160px] text-end font-[900] mt-4">STYLING TRENDS
            & MUCH MORE</h3>
        <p className="text-[14px] leading-[24px] ml-auto text-end font-[400] mt-2 text-[#727272]">
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </p>
        <button className="mt-4 w-[142px] ml-auto px-6 py-2 bg-[#46A358] text-white font-semibold rounded-md hover:bg-green-600">
          Find More →
        </button>
            </div>
        </div>
    </section>
  )
}

export default About