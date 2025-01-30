const ProductCard = ({name, price, discount, image}) => {
  return (
    <li className="rounded-lg overflow-hidden relative w-[250px] group cursor-pointer">


  <img
    className="w-[250px] h-[250px] object-cover"
    src={image}
    alt="Barberton Daisy"
  />

  {discount && (
    <div className="absolute top-2 right-2 bg-[#46A358] text-white px-2 py-1 text-sm rounded">
      {discount}
    </div>
  )}



  <div className="p-4">
    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
    <p className="text-green-600 text-xl font-bold">${price}</p>
  </div>
</li>
  );
};

export default ProductCard;
