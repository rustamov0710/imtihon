import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const New = () => {
  const items = [
      { id: 9, name: 'Chinese Evergreen', price: '39.00', image: './img_9.png' },
      { id: 8, name: 'Broadleaf Lady Palm', price: '59.00', image: './img_8.png' },
      { id: 7, name: "Bird's Nest Fern", price: '99.00', image: './img_7.png' },
      { id: 6, name: 'Aluminum Plant', price: '179.00', image: './img_6.png' },
      { id: 5, name: 'Blushing Bromeliad', price: '139.00', image: './img_5.png' },
      { id: 4, name: 'Beach Spider Lily', price: '129.00', image: './img_4.png' },
      { id: 3, name: 'African Violet', price: '199.00', discount: '13% OFF', image: './img_3.png' },
      { id: 2, name: 'Angel Wing Begonia', price: '169.00', image: './img_2.png' },
    { id: 1, name: 'Barberton Daisy', price: '119.00', image: './img_1.png' },
  ];

  return (
    <div className="flex-1 p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <li key={item.id} className="flex justify-center">
            <ProductCard 
              name={item.name} 
              price={item.price} 
              discount={item.discount} 
              image={item.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default New;
