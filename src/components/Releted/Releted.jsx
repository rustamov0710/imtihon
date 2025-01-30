import React from 'react'

const Releted = () => {
    const plants = [
        { name: "Beach Spider Lily", price: "$129.00", image: "img_2.png" },
        { name: "Blushing Bromeliad", price: "$139.00", image: "img_3.png" },
        { name: "Aluminum Plant", price: "$179.00", image: "img_4.png" },
        { name: "Bird's Nest Fern", price: "$99.00", image: "img_5.png" },
        { name: "Chinese Evergreen", price: "$39.00", image: "img_6.png" },
      ];
    
      return (
        <div className="p-6 container ">
          <h2 className="text-lg font-semibold text-green-700 mb-4 border-b-[1px] border-[#46A35880] pb-[12px] mt-[90px]">Releted Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {plants.map((plant, index) => (
              <div key={index} className=" p-4 text-center">
                <img src={plant.image} alt={plant.name} className="w-[219px] h-[255px] object-cover mb-4 rounded-lg" />
                <h3 className="text-md font-medium">{plant.name}</h3>
                <p className="text-green-600 font-semibold mb-[200px]">{plant.price}</p>
              </div>
            ))}
          </div>
        </div>
      );
}
export default Releted