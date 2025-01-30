import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../../utils/config";

const Shoping = () => {
  const { productId } = useParams();

  const [flower, setFlower] = useState(null);

  useEffect(() => {
    API.get(`flowers/${productId}`)
      .then((response) => {
        setFlower(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  console.log(flower);

  const [currentImage, setCurrentImage] = useState(flower?.image?.[0]);
  const [selectedSize, setSelectedSize] = useState("S");

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  if (!flower) return <div>Loading...</div>;

  return (
    <>
      <div className="flex flex-wrap justify-center gap-8 p-6">
        {/* Image Gallery */}
        <div className="flex items-center">
          <div className="flex flex-col gap-4 mr-4">
            {flower?.image.map((image, index) => (
              <div
                key={index}
                className={`w-16 h-16 border-2 rounded-md overflow-hidden cursor-pointer transition-colors duration-300 ${
                  currentImage === image ? "border-black" : "border-transparent"
                }`}
                onClick={() => setCurrentImage(image)}
              >
                <img src={`./${image}`} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="w-96 h-96 border-2 border-gray-300 rounded-xl overflow-hidden">
            <img src={`./${currentImage}`} alt="Main" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Details */}
        <div className="max-w-lg p-6">
          <h1 className="text-2xl font-bold mb-2">{flower?.name}</h1>
          <div className="text-lg text-green-600 mb-2">${flower?.price}.00</div>
          <div className="flex items-center gap-2 mb-4">
            <div className="text-yellow-500">&#9733; &#9733; &#9733; &#9733; &#9734;</div>
            <span className="text-gray-600">19 Customer Reviews</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
          </p>
          <div className="mb-6">
            <span className="text-lg mr-4">Size:</span>
            {['S', 'M', 'L', 'XL'].map(size => (
              <button
                key={size}
                className={`px-4 py-1 border rounded-lg mr-2 ${
                  selectedSize === size ? "bg-green-600 text-white" : "text-gray-700"
                }`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex gap-4 mb-6">
            <button className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg">Buy Now</button>
            <Link to='/shop/shopping-cart'>
              <button className="flex-1 px-4 py-2 border border-green-600 text-green-600 rounded-lg">Add to Cart</button>
            </Link>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <span>Share this product:</span>
            <a href="#" className="text-green-600">Facebook</a>
            <a href="#" className="text-green-600">Twitter</a>
            <a href="#" className="text-green-600">LinkedIn</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shoping;
