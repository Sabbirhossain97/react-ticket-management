import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Popconfirm } from "antd";

export default function DataTable({
  ticketData,
  editModal,
  deleteTicket,
  startIndex,
  endIndex,
}) {
  const confirm = (id) => {
    deleteTicket(id);
  };

  const cancel = (e) => {
    console.log("canceled");
  };
  return (
    <div>
      <div className=" flex justify-center overflow-x-auto rounded-lg mt-8  drop-shadow-md">
        <table className="w-full md:w-10/12 text-sm text-left text-gray-500 rounded-md">
          <thead className="text-xs text-gray-700 uppercase bg-[#DAEFF5]">
            <tr>
              <th scope="col" className="px-6 py-3 text-blue-500 text-center">
                Ticket Type
              </th>
              <th scope="col" className="px-6 py-3 text-blue-500 text-center">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-blue-500 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="">
            {ticketData.length > 0 ? (
              ticketData
                .filter(
                  (item, index) => index >= startIndex && index <= endIndex
                )

                .map((item, key) => (
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
                          onClick={() => editModal(item.id)}
                          className="cursor-pointer border text-3xl rounded p-1 transition hover:border-blue-400 hover:text-blue-500"
                        />

                        <Popconfirm
                          title="Delete"
                          description="Are you sure to delete this ?"
                          onConfirm={() => confirm(item.id)}
                          onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                        >
                          <AiOutlineDelete className="cursor-pointer border text-3xl ml-2 rounded p-1 transition hover:border-blue-400 hover:text-blue-500" />
                        </Popconfirm>
                      </div>
                    </td>
                  </tr>
                ))
            ) : (
              <tr className="bg-white border-b border-gray-200 font-medium text-gray-900 ">
                <td className="px-6 py-4 border text-center">Empty</td>

                <td className="px-6 py-4 border text-center overflow-x-auto">
                  Empty
                </td>
                <td className="px-6 py-4 border text-center">N/A</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
