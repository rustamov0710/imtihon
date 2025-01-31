import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API } from "../../utils/config";

const Shoping = () => {
  const { productId } = useParams();
  const [flower, setFlower] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("S");

  useEffect(() => {
    API.get(`flowers/${productId}`)
      .then((response) => {
        setFlower(response.data);
        setCurrentImage(response.data.image?.[0]);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  if (!flower) return <div className="text-center py-10 text-xl">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-6">
          <div className="flex sm:flex-col gap-4">
            {flower.image.map((image, index) => (
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
          <div className="w-72 sm:w-96 h-72 sm:h-96 border-2 border-gray-300 rounded-xl overflow-hidden">
            <img src={`./${currentImage}`} alt="Main" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full max-w-lg p-4 sm:p-6 text-center lg:text-left">
          <h1 className="text-2xl font-bold mb-2">{flower.name}</h1>
          <div className="text-lg text-green-600 mb-2">${flower.price}.00</div>
          <div className="flex justify-center lg:justify-start items-center gap-2 mb-4">
            <div className="text-yellow-500">&#9733; &#9733; &#9733; &#9733; &#9734;</div>
            <span className="text-gray-600">19 Customer Reviews</span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground.
          </p>
          <div className="mb-6">
            <span className="text-lg mr-4">Size:</span>
            {["S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className={`px-4 py-1 border rounded-lg mr-2 ${
                  selectedSize === size ? "bg-green-600 text-white" : "text-gray-700"
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded-lg">
              Buy Now
            </button>
            <Link to="/shop/shopping-cart" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-4 py-2 border border-green-600 text-green-600 rounded-lg">
                Add to Cart
              </button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-600">
            <span>Share this product:</span>
            <div className="flex gap-4">
              <a href="#" className="text-green-600">Facebook</a>
              <a href="#" className="text-green-600">Twitter</a>
              <a href="#" className="text-green-600">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoping;
