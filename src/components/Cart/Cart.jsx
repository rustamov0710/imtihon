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
    <section className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-8">
      {/* Cart Items */}
      <div className="w-full lg:w-2/3 p-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-4">Shopping Cart</h2>

        {/* Cart Header */}
        <div className="hidden sm:grid grid-cols-4 font-semibold text-gray-700 border-b pb-2 mb-4">
          <span>Product</span>
          <span className="text-center">Price</span>
          <span className="text-center">Quantity</span>
          <span className="text-center">Total</span>
        </div>

        {/* Cart Items List */}
        {cart.map((item) => (
          <div key={item.id} className="grid grid-cols-1 sm:grid-cols-4 items-center py-4 border-b">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 text-center sm:text-left">${item.price.toFixed(2)}</p>
            <div className="flex justify-center sm:justify-start items-center gap-3">
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
            <div className="flex justify-between sm:justify-center items-center">
              <p className="text-green-600 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeItem(item.id)} className="text-red-500 text-xl ml-4">
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="w-full lg:w-1/3 p-6">
        <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>

        {/* Coupon Input */}
        <div className="mb-4">
          <label className="block text-gray-700">Coupon Apply</label>
          <div className="flex mt-2">
            <input
              type="text"
              placeholder="Enter coupon code here..."
              className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring focus:ring-green-300"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600">
              Apply
            </button>
          </div>
        </div>

        {/* Price Details */}
        <div className="border-t pt-4">
          <p className="text-gray-700 flex justify-between">
            <span>Subtotal:</span> <span>${subtotal.toFixed(2)}</span>
          </p>
          <p className="text-gray-700 flex justify-between">
            <span>Shipping:</span> <span>${shipping.toFixed(2)}</span>
          </p>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span>Coupon Discount:</span> <span className="text-red-500">(-) 00.00</span>
          </div>
          <p className="text-green-500 text-sm mt-1 cursor-pointer">View shipping charge</p>
          <p className="text-lg font-bold flex justify-between mt-4">
            <span>Total:</span> <span>${total.toFixed(2)}</span>
          </p>
        </div>

        {/* Checkout Button */}
        <Link to="/shop/shopping-checkout">
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
