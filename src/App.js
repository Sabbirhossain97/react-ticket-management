import { useState } from "react";
import "./index.css";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { ImStatsDots } from "react-icons/im";
import { IoTicketSharp } from "react-icons/io";
import { AiOutlineProfile } from "react-icons/ai";
import { ImUsers } from "react-icons/im";
import { BiAddToQueue } from "react-icons/bi";
import { AiOutlineLaptop } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [ticketId, setTicketId] = useState(1);
  const [ticketType, setTicketType] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketData, setTicketData] = useState([]);

  const addTicket = (e) => {
    e.preventDefault();
    setTicketId((prevState) => prevState + 1);
    const newObj = {
      id: ticketId,
      type: ticketType,
      description: ticketDescription,
    };

    setShowModal(false);
    setTicketData([...ticketData, newObj]);
    toast.success("Ticket type added successfully!", {
      position: "top-center",
    });
    setTicketType("");
    setTicketDescription("");
    localStorage.setItem("tickets",JSON.stringify(ticketData))
  };

  const deleteTicket = (key) => {
    setTicketId((prevState) => prevState - 1);
    const result = ticketData.filter((elm, index) => {
      if (key !== index) {
        return elm;
      }
    });
    setTicketData(result);
    toast.success("deleted!", {
      position: "top-center",
    });
  };

  const editTicket = (key) => {
    const result = ticketData.filter((elm, index) => {
      if (key === index) {
        return elm;
      }
    });
    setShowModal(true);
    const [data] = result;
    setTicketType(data?.type);
    setTicketDescription(data?.description);
    console.log(ticketType, ticketDescription);
    setEdit(true);
  };
  return (
    <div>
      <Toaster
        toastOptions={{
          duration: 2000,
          style: {
            background: "#fff",
            color: "gray",
            fontSize: "14px",
          },
        }}
      />
      <div className="flex flex-row min-h-screen">
        {/* sidebar */}
        <div className="w-1/4 md:w-1/5 xl:w-[250px] bg-[#070a52] flex justify-center ">
          <div className="w-10/12  h-1/2 p-2 mt-8 py-4">
            <ul className="mt-5 text-md py-4 flex flex-col space-y-8 text-gray-300">
              <li>
                <ImStatsDots />
                Dashboard
              </li>
              <li>My Tickets</li>
              <li>My Profile</li>
              <li>Users</li>
              <li>Assets</li>
              <li>Tickets Type</li>
              <li>Tickets Queue</li>
            </ul>
          </div>
        </div>
        {/* sidebar */}
        <div className="w-full md:w-10/12 xl:w-[1800px] bg-[#D8F2EF]">
          <div className="relative bg-[#f0f5f4] w-full h-20">
            <div className="absolute top-5 right-8 border border-gray-300 rounded-full p-1">
              <AiOutlineUser className="text-2xl" />
            </div>
          </div>
          <div className="mt-[100px] ">
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="sm:flex sm:items-end w-full mx-auto  justify-end">
                <div className=" ">
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(true);
                      setEdit(false);
                    }}
                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                  >
                    Add Ticket Type
                  </button>
                </div>
              </div>
              {/* table */}
              {ticketData.length > 0 ? (
                <div className="relative overflow-x-auto rounded-md mt-8 border drop-shadow-md">
                  <table className="w-full text-sm text-left text-gray-500 ">
                    <thead className="text-xs text-gray-700 uppercase bg-[#DAEFF5]">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-blue-500 text-center"
                        >
                          Ticket Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-blue-500 text-center"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-blue-500 text-center"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {ticketData.map((item, key) => (
                        <tr
                          key={key}
                          className="bg-white border-b border-gray-200 font-medium text-gray-900 "
                        >
                          <td className="px-6 py-4 border text-center">
                            {item.type}
                          </td>
                          <td className="px-6 py-4 border text-center overflow-x-auto">
                            {item.description}
                          </td>
                          <td className="px-6 py-4 border text-center">
                            <div className="flex justify-center  p-1">
                              <AiOutlineEdit
                                onClick={() => editTicket(key)}
                                className="cursor-pointer border text-3xl rounded p-1"
                              />
                              <AiOutlineDelete
                                onClick={() => deleteTicket(key)}
                                className="cursor-pointer border text-3xl ml-2 rounded p-1"
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="flex justify-center h-[500px] items-center font-semibold text-2xl">
                  {" "}
                  Please Add Some Ticket Type{" "}
                </div>
              )}
            </div>
          </div>
          {/* modal */}
          <div
            className={`fixed top-1/4 left-1/3 ${
              showModal ? "" : "hidden"
            } w-10/12 md:w-1/2 xl:w-1/3 max-h-full`}
          >
            {showModal ? (
              <div
                onClick={() => setShowModal(false)}
                className="fixed inset-0 transition bg-gray-500 bg-opacity-75"
              ></div>
            ) : (
              ""
            )}
            <div className="relative bg-white rounded-lg shadow ">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-blue-500 ">
                  {edit ? "Edit Ticket Type" : "Add Ticket Type"}
                </h3>
                <form className="space-y-6" onSubmit={addTicket}>
                  <div className="">
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      <span className="text-red-500">*</span> Ticket Type
                    </label>
                    <input
                      type="text"
                      value={ticketType}
                      onChange={(e) => setTicketType(e.target.value)}
                      className="bg-gray-50 border border-gray-00 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 ">
                      Description
                    </label>
                    <textarea
                      onChange={(e) => setTicketDescription(e.target.value)}
                      value={ticketDescription}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                    />
                  </div>
                  <div className="flex flex-row justify-end">
                    <button
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        setTicketType("");
                        setTicketDescription("")
                      }}
                      className="w-1/3 text-gray-500 border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="ml-2 w-1/2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {edit ? "Edit Ticket Type" : "Add Ticket Type"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* modal */}
        </div>
      </div>
    </div>
  );
}

export default App;
