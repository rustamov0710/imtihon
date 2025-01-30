import { useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Barberton Daisy", price: 119, quantity: 2 },
    { id: 2, name: "Blushing Bromeliad", price: 139, quantity: 6 },
    { id: 3, name: "Aluminum Plant", price: 179, quantity: 9 },
  ]);

  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 16;
  const total = subtotal + shipping;

  return (
    <section className=" container flex gap-[90px]">

      <ul className="w-[720px] p-6">
        <div className="flex items-center w-[720px] border-b pb-[11px] mb-[11px]">
        <h2 className="text-[16px] font-[500]">Products</h2>
        <p className="text-[16px] font-[500] ml-[245px]">Price</p>
        <p className="text-[16px] font-[500] ml-[108px]">Quantity</p>
        <p className="text-[16px] font-[500] ml-[97px]">Total</p>
        </div>
        {cart.map((item) => (
          <li
          key={item.id}
          className="grid grid-cols-4 items-center pb-4 mb-4"
        >
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p className="text-gray-600">${item.price.toFixed(2)}</p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => updateQuantity(item.id, -1)}
              className="px-3 py-1 bg-green-500 rounded-full text-white"
            >
              -
            </button>
            <span className="text-lg font-medium">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, 1)}
              className="px-3 py-1 bg-green-500 rounded-full text-white"
            >
              +
            </button>
          </div>
          <div className="flex items-center gap-[50px]">
          <p className="text-green-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
          <button onClick={() => removeItem(item.id)} className="text-red-500 text-xl">
            🗑
          </button>
          </div>
        </li>
        
        ))}
      </ul>
      <div className="w-[332px] p-6">
      <h2 className="text-xl font-semibold">Cart Totals</h2>
      
      <div className="mb-4">
        <label className="block text-gray-700">Coupon Apply</label>
        <div className="flex mt-2">
          <input 
            type="text" 
            placeholder="Enter coupon code here..." 
            className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring focus:ring-green-300"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600">Apply</button>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <p className="text-gray-700">Subtotal: ${subtotal.toFixed(2)}</p>
        <p className="text-gray-700">Shipping: ${shipping.toFixed(2)}</p>
        <div className="flex justify-between text-lg">
          <span>Coupon Discount</span>
          <span className="text-red-500">(-) 00.00</span>
        </div>
        <p className="text-green-500 text-sm mt-1 cursor-pointer">View shipping charge</p>
        <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
      </div>
      
      <Link to='/shop/shopping-checkout'>
      <button className="w-full py-2 mt-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700">
        Proceed To Checkout
      </button>
      </Link>
      <p className="text-center text-green-500 mt-2 cursor-pointer">Continue Shopping</p>
    </div>
    </section>
  );
};

export default Cart;
