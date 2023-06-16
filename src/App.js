import { useEffect, useState } from "react";
import "./index.css";
import { AiOutlineUser } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";
import Sidebar from "./components/Sidebar";
import DataTable from "./components/DataTable";
import Modal from "./components/Modal";
import Pagniation from "./components/Pagniation";
import Footer from "./components/Footer";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [ticketId, setTicketId] = useState(1);
  const [ticketType, setTicketType] = useState("");
  const [ticketDescription, setTicketDescription] = useState("");
  const [ticketData, setTicketData] = useState(() => {
    return JSON.parse(localStorage.getItem("tickets")) || [];
  });
  const [editKey, setEditKey] = useState(null);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

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
  };

  const deleteTicket = (id) => {
    setTicketId((prevState) => prevState - 1);
    const result = ticketData.filter((elm) => {
      if (id !== elm.id) {
        return elm;
      }
    });
    setTicketData(result);
    toast.success("deleted!", {
      position: "top-center",
    });
  };

  const editModal = (key) => {
    setShowModal(true);
    setEdit(true);
    const getTickets = localStorage.getItem("tickets");
    const getCurrentTicket = JSON.parse(getTickets).filter((elm) => {
      if (key === elm.id) {
        return elm;
      }
    });
    console.log(getCurrentTicket)
    const [values] = getCurrentTicket;
    const { id, type, description } = values;
    setEditKey(id);
    setTicketType(type);
    setTicketDescription(description);
  };

  function updateTicket(e) {
    const getTickets = JSON.parse(localStorage.getItem("tickets"));
    const getCurrentTicket = getTickets.map((elm) => {
      if (editKey === elm.id) {
        return {
          id: editKey,
          type: ticketType,
          description: ticketDescription,
        };
      } else {
        return elm;
      }
    });
    setTicketData(getCurrentTicket);
    toast.success("Ticket type edited successfully!", {
      position: "top-center",
    });
    setShowModal(false);
    setTicketType("");
    setTicketDescription("");
  }
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(ticketData));
  }, [ticketData]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(
    startIndex + itemsPerPage - 1,
    ticketData.length - 1
  );
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
        <Sidebar />

        <div className="bg-[#D8F2EF] w-screen mt-24 md:mt-0">
          <div className="relative bg-[#f0f5f4] w-full h-20">
            <div className="absolute top-5 right-8 rounded-full p-1 border border-gray-300">
              <AiOutlineUser className="text-2xl " />
            </div>
          </div>
          <div className="mt-[100px] mx-auto md:w-full relative min-h-screen">
            <div className="px-4 sm:px-6 lg:px-8 relative ">
              <div className="flex md:w-10/12 w-full mx-auto justify-end ">
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

              <DataTable
                ticketData={ticketData}
                editModal={editModal}
                deleteTicket={deleteTicket}
                startIndex={startIndex}
                endIndex={endIndex}
              />
            </div>
            <Pagniation
              ticketData={ticketData}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <Footer />
          </div>
          <Modal
            setShowModal={setShowModal}
            setTicketType={setTicketType}
            setTicketDescription={setTicketDescription}
            setEdit={setEdit}
            updateTicket={updateTicket}
            addTicket={addTicket}
            ticketType={ticketType}
            ticketDescription={ticketDescription}
            edit={edit}
            showModal={showModal}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
