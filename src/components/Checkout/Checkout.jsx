import { useState } from "react";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-8">
      {/* Billing Address */}
      <div className="p-6 w-full lg:w-2/3">
        <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700">First Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border p-2 rounded focus:ring focus:ring-green-300" />
          </div>
          <div>
            <label className="block text-gray-700">Last Name <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border p-2 rounded focus:ring focus:ring-green-300" />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Country / Region <span className="text-red-500">*</span></label>
            <select className="w-full border p-2 rounded focus:ring focus:ring-green-300">
              <option>Select a country / region</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Town / City <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border p-2 rounded focus:ring focus:ring-green-300" />
          </div>
          <div>
            <label className="block text-gray-700">State <span className="text-red-500">*</span></label>
            <select className="w-full border p-2 rounded focus:ring focus:ring-green-300">
              <option>Select a state</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Street Address <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border p-2 rounded focus:ring focus:ring-green-300" placeholder="Street address, Apartment, suite, etc." />
          </div>
          <div>
            <label className="block text-gray-700">Zip Code <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border p-2 rounded focus:ring focus:ring-green-300" />
          </div>
          <div>
            <label className="block text-gray-700">Email Address <span className="text-red-500">*</span></label>
            <input type="email" className="w-full border p-2 rounded focus:ring focus:ring-green-300" />
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Phone Number <span className="text-red-500">*</span></label>
            <input type="text" className="w-full border p-2 rounded focus:ring focus:ring-green-300" />
          </div>
          <div className="col-span-2 flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Ship to a different address?</span>
          </div>
          <div className="col-span-2">
            <label className="block text-gray-700">Order Notes (optional)</label>
            <textarea className="w-full border p-2 rounded h-20 focus:ring focus:ring-green-300"></textarea>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="p-6 w-full lg:w-1/3">
        <h2 className="text-xl font-semibold mb-4">Your Order</h2>
        <div>
          <div className="flex justify-between">
            <span>Barberton Daisy (x2)</span>
            <span className="font-semibold">$238.00</span>
          </div>
          <div className="flex justify-between">
            <span>Blushing Bromeliad (x6)</span>
            <span className="font-semibold">$834.00</span>
          </div>
          <div className="flex justify-between">
            <span>Aluminum Plant (x9)</span>
            <span className="font-semibold">$1,611.00</span>
          </div>
          <div className="flex justify-between border-t pt-2 mt-2">
            <span>Subtotal</span>
            <span className="font-semibold">$2,683.00</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-semibold">$16.00</span>
          </div>
          <div className="flex justify-between text-lg font-bold border-t pt-2 mt-2">
            <span>Total</span>
            <span>$2,699.00</span>
          </div>
        </div>

        {/* Payment Methods */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Payment Method</h2>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="radio" name="payment" value="paypal" onChange={() => setPaymentMethod("paypal")} className="mr-2" />
            PayPal / Credit Card
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment" value="bank" onChange={() => setPaymentMethod("bank")} className="mr-2" />
            Direct Bank Transfer
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment" value="cash" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} className="mr-2" />
            Cash on Delivery
          </label>
        </div>

        {/* Place Order Button */}
        <button className="w-full mt-6 bg-green-600 text-white p-3 rounded hover:bg-green-700 transition">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
