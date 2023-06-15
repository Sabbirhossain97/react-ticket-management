import React from "react";

export default function Modal({
  setShowModal,
  setTicketType,
  setTicketDescription,
  setEdit,
  updateTicket,
  addTicket,
  ticketType,
  ticketDescription,
  edit,
  showModal,
}) {
  return (
      <div
        className={`fixed top-1/4 left-8 md:left-1/3 ${
          showModal ? "" : "hidden"
        } w-10/12 md:w-1/2 xl:w-1/3 max-h-full`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
      >
        {showModal ? (
          <div
            onClick={() => {
              setShowModal(false);
              setTicketType("");
              setTicketDescription("");
            }}
            className="fixed inset-0 transition bg-gray-500 bg-opacity-75"
          ></div>
        ) : (
          ""
        )}
        <div className="relative bg-white rounded-lg shadow ">
          <button
            type="button"
            onClick={() => {
              setShowModal(false);
              setTicketType("");
              setTicketDescription("");
            }}
            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center "
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
                  name="ticketType"
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
                  type="text"
                  onChange={(e) => setTicketDescription(e.target.value)}
                  value={ticketDescription}
                  name="ticketDescription"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  "
                />
              </div>
              <div className="flex flex-row justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setTicketType("");
                    setTicketDescription("");
                    setEdit(false);
                  }}
                  className="w-1/4 text-gray-500 border  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Cancel
                </button>

                {edit ? (
                  <button
                    type="button"
                    onClick={(e) => updateTicket(e)}
                    className="ml-2 md:w-1/3 xl:w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save changes
                  </button>
                ) : (
                  <button
                    type="submit"
                    id="add"
                    className="ml-2 md:w-1/3 xl:w-1/4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add Ticket Type
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
