import { useState } from "react";

const Checkout = () => {

    const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className=" container flex gap-[76px]">
      {/* Billing Address */}
      <div className="p-6 w-[722px]">
        <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
        <div className="grid grid-cols-2 gap-4">
            <label htmlFor="first_name" className="flex items-center">First Name <span className="text-red-500">*</span></label>
          <input type="text" id="first_name" className="border p-2 rounded" />
            <label htmlFor="last_name" className="flex items-center">Last Name <span className="text-red-500">*</span></label>
          <input type="text" id="last_name" className="border p-2 rounded" />
          <select className="border p-2 rounded">
            <option>Select a country / region *</option>
          </select>
          <input type="text" placeholder="Town / City *" className="border p-2 rounded" />
          <input type="text" placeholder="Street Address *" className="border p-2 rounded col-span-2" />
          <input type="text" placeholder="Apartment, suite, unit, etc. (optional)" className="border p-2 rounded col-span-2" />
          <select className="border p-2 rounded">
            <option>Select a state *</option>
          </select>
          <input type="text" placeholder="Zip *" className="border p-2 rounded" />
          <input type="email" placeholder="Email Address *" className="border p-2 rounded col-span-2" />
          <input type="text" placeholder="Phone Number *" className="border p-2 rounded col-span-2" />
          <label className="col-span-2 flex items-center">
            <input type="checkbox" className="mr-2" /> Ship to a different address?
          </label>
          <textarea placeholder="Order notes (optional)" className="border p-2 rounded col-span-2 h-20"></textarea>
        </div>
      </div>

      {/* Order Summary */}
      <div className="p-6 w-[405px]">
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
        <div>
          <label className="flex items-center">
            <input type="radio" name="payment" value="paypal" onChange={() => setPaymentMethod("paypal")} className="mr-2" />
            PayPal / Credit Card
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment" value="bank" onChange={() => setPaymentMethod("bank")} className="mr-2" />
            Direct bank transfer
          </label>
          <label className="flex items-center">
            <input type="radio" name="payment" value="cash" checked={paymentMethod === "cash"} onChange={() => setPaymentMethod("cash")} className="mr-2" />
            Cash on delivery
          </label>
        </div>

        <button className="w-full mt-6 bg-green-500 text-white p-3 rounded">Place Order</button>
      </div>
    </div>
  );
};

export default Checkout;
