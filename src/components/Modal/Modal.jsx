import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { IoExitOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="z-[4]">
      <button onClick={() => setIsModalOpen(true)} className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2">
        <IoExitOutline /> Login
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-96 p-6 rounded-lg shadow-lg relative">
            <div className="flex justify-center gap-2 border-b pb-2 mb-4">
              <button
                className={`px-4 py-2 ${isLogin ? 'border-b-2 border-green-500 font-bold' : ''}`}
                onClick={() => setIsLogin(true)}
              >Login</button>
              <button
                className={`px-4 py-2 ${!isLogin ? 'border-b-2 border-green-500 font-bold' : ''}`}
                onClick={() => setIsLogin(false)}
              >Register</button>
              <button onClick={() => setIsModalOpen(false)} className="text-xl ">&times;</button>
            </div>

            {isLogin ? (
              <form className="flex flex-col space-y-3">
                <p className="text-gray-600">Enter your username and password to login.</p>
                <input type="email" placeholder="Enter your email" className="border p-2 rounded" required />
                <input type="password" placeholder="Enter your password" className="border p-2 rounded" required />
                <a href="#" className="text-green-500 text-sm text-right">Forgot Password?</a>
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Login</button>
                <p className="text-center text-gray-400 text-sm">Or login with</p>
                <div className="flex flex-col space-y-2">
                  <button className="flex items-center justify-center gap-2 border p-2 rounded">
                    <FcGoogle /> Login with Google
                  </button>
                  <button className="flex items-center justify-center gap-2 border p-2 rounded text-blue-600">
                    <FaFacebook /> Login with Facebook
                  </button>
                </div>
              </form>
            ) : (
              <form className="flex flex-col space-y-3">
                <p className="text-gray-600">Enter your email and password to register.</p>
                <input type="text" placeholder="Username" className="border p-2 rounded" required />
                <input type="email" placeholder="Enter your email" className="border p-2 rounded" required />
                <input type="password" placeholder="Password" className="border p-2 rounded" required />
                <input type="password" placeholder="Confirm Password" className="border p-2 rounded" required />
                <button type="submit" className="bg-green-500 text-white p-2 rounded">Register</button>
                <p className="text-center text-gray-400 text-sm">Or register with</p>
                <div className="flex flex-col space-y-2">
                  <button className="flex items-center justify-center gap-2 border p-2 rounded">
                    <FcGoogle /> Continue with Google
                  </button>
                  <button className="flex items-center justify-center gap-2 border p-2 rounded text-blue-600">
                    <FaFacebook /> Continue with Facebook
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
