import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Pagniation({
  ticketData,
  currentPage,
  itemsPerPage,
  setCurrentPage,
}) {
  const [totalPage, setTotalPage] = useState(1);

  let paginationArray = [];
  for (let i = 1; i <= totalPage; i++) {
    paginationArray.push(i);
  }

  function previousPage() {
    if (currentPage !== 1) {
      setCurrentPage((e) => e - 1);
    }
  }
  function nextPage() {
    if (currentPage !== totalPage) {
      setCurrentPage((e) => e + 1);
    }
  }
  useEffect(() => {
    setTotalPage(Math.ceil(ticketData.length / itemsPerPage));
  }, [itemsPerPage, ticketData.length]);

  return (
    <div>
      <nav className="flex justify-end w-10/12 mx-auto mt-4">
        <ul className="list-style-none flex space-x-2 p-2">
          <li>
            <p
              onClick={() => previousPage()}
              className={` ${
                currentPage === 1 || ticketData.length === 0
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } relative block rounded bg-transparent px-2 py-2.5 text-sm  transition-all duration-300 `}
            >
              <IoIosArrowBack className="text-gray-500 hover:text-blue-500" />
            </p>
          </li>

          {paginationArray.length > 0 ? (
            paginationArray.map((item, key) => (
              <li key={key} onClick={() => setCurrentPage(item)}>
                <p
                  className={`cursor-pointer border ${
                    currentPage === item ? "border-blue-500" : "border-gray-300"
                  } bg-white relative block rounded bg-transparent px-3 py-1.5 text-sm  transition-all duration-300`}
                >
                  {item}
                </p>
              </li>
            ))
          ) : (
            <li>
              <p className="border border-blue-500 bg-white relative block rounded bg-transparent px-3 py-1.5 text-sm  transition-all duration-300 ">
                1
              </p>
            </li>
          )}

          <li>
            <p
              onClick={() => nextPage()}
              className={` ${
                currentPage === totalPage || ticketData.length === 0
                  ? "cursor-not-allowed"
                  : "cursor-pointer"
              } relative block rounded bg-transparent px-2 py-2.5 text-sm  transition-all duration-300 `}
            >
              <IoIosArrowForward className="text-gray-500 hover:text-blue-500" />
            </p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
