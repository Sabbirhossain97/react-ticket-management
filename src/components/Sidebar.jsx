import React, { useState } from "react";
import { ImStatsDots } from "react-icons/im";
import { MdOutlineCategory } from "react-icons/md";
import { BsTicketDetailedFill } from "react-icons/bs";
import { AiOutlineProfile } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineLaptop } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

export default function Sidebar() {
  return (
    <div className="">
      <div
        className={`hidden md:block transition duration-300 h-full px-3 w-[200px]  py-4 overflow-y-auto bg-[#070a52]  `}
      >
        <img src="/groupM.png" width="150px" height="150px" className="p-4" />
        <ul className="flex flex-col space-y-6 font-medium text-gray-300 mt-4 ">
          <li>
            <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <ImStatsDots />
              <span className="ml-3">Dashboard</span>
            </p>
          </li>
          <li>
            <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <BsTicketDetailedFill />
              <span className="flex-1 ml-3 whitespace-nowrap">My Tickets</span>
            </p>
          </li>
          <li>
            <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <AiOutlineProfile />
              <span className="flex-1 ml-3 whitespace-nowrap">My Profile</span>
            </p>
          </li>
          <li>
            <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <ImUsers />
              <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
            </p>
          </li>
          <li>
            <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <AiOutlineLaptop />
              <span className="flex-1 ml-3 whitespace-nowrap">Assets</span>
            </p>
          </li>
          <li>
            <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-blue-700">
              <MdOutlineCategory />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Tickets Type
              </span>
            </p>
          </li>
          <li>
            <p className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <BiAddToQueue />
              <span className="flex-1 ml-3 whitespace-nowrap">
                Tickets Queue
              </span>
            </p>
          </li>
        </ul>
      </div>
      {/* small screen */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-10 py-2  bg-[#070a52] overflow-y-auto h-24 w-screen">
        <ul className="space-x-2 mt-6 font-medium text-gray-300 flex flex-row justify-around items-center ">
          <li title="dashboard">
            <p className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <ImStatsDots />
            </p>
          </li>
          <li title="My Tickets">
            <p className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <BsTicketDetailedFill />
            </p>
          </li>
          <li title="My Profile">
            <p className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <AiOutlineProfile />
            </p>
          </li>
          <li title="Users">
            <p className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <ImUsers />
            </p>
          </li>
          <li title="Assets">
            <p className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <AiOutlineLaptop />
            </p>
          </li>
          <li title="Tickets Type">
            <p className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white bg-blue-700">
              <MdOutlineCategory />
            </p>
          </li>
          <li title="Tickets Queue">
            <p className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <BiAddToQueue />
            </p>
          </li>
        </ul>
      </div>
      {/* small screen */}
    </div>
  );
}
