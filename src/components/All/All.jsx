import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { API } from '../../utils/config';
import { Link } from 'react-router-dom';

const All = () => {

  const [flowers, setFlowers] = useState(null)

  useEffect(() => {
      API.get(`flowers`)
        .then((response) => {
          setFlowers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching authors:", error);
        });
  }, []);

  console.log(flowers);


  return (
    <div className="flex-1 p-6">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {flowers?.map((item) => (
            <Link to={`/shop/${item._id}`}>
            <ProductCard 
            key={item._id}
              name={item.name} 
              price={item.price} 
              discount={item.discount} 
              image={item.image[0]}
            />
            </Link>
        ))}
      </ul>
    </div>
  );
};

export default All;
