import React, { useState } from "react";

const Pagination = () => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  return (
    <section className="flex justify-end container">
      <ul className="flex space-x-2 mb-[94px] mt-[90px]">
        <li>
          <button
            className={`px-4 py-2 border rounded ${
              activePage === 1 ? "bg-[#46A358] text-white border-[#46A358]" : "hover:bg-gray-200"
            }`}
            onClick={() => handlePageClick(1)}
          >
            1
          </button>
        </li>
        <li>
          <button
            className={`px-4 py-2 border rounded ${
              activePage === 2 ? "bg-[#46A358] text-white border-[#46A358]" : "hover:bg-gray-200"
            }`}
            onClick={() => handlePageClick(2)}
          >
            2
          </button>
        </li>
        <li>
          <button
            className={`px-4 py-2 border rounded ${
              activePage === 3 ? "bg-[#46A358] text-white border-[#46A358]" : "hover:bg-gray-200"
            }`}
            onClick={() => handlePageClick(3)}
          >
            3
          </button>
        </li>
        <li>
          <button
            className={`px-4 py-2 border rounded ${
              activePage === 4 ? "bg-[#46A358] text-white border-[#46A358]" : "hover:bg-gray-200"
            }`}
            onClick={() => handlePageClick(4)}
          >
            4
          </button>
        </li>
        <li>
          <button
            className="px-4 py-2 border rounded hover:bg-gray-200"
          >
            &gt;
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Pagination;
