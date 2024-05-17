import { useState, useEffect } from "react";
import { ImBarcode } from "react-icons/im";
import { CiLocationArrow1 } from "react-icons/ci";
import { GoVerified } from "react-icons/go";
import { IoCloseCircleSharp } from "react-icons/io5";

const Ticket = ({ city, travelers, date, viewTicket }) => {
  const [ticketID, setTicketID] = useState("");

  useEffect(() => {
    if (viewTicket) {
      generateRandomNumber();
    }
  }, [viewTicket]);
  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10000000000);
    setTicketID(randomNumber.toString().padStart(10, "0"));
  };

  return (
    <div className="b-2">
      <div className="ticket bg-sky-50 m-10 p-4 rounded-md relative">
        <button
          className="text-4xl absolute right-[-14px] top-[-14px] drop-shadow-xl text-red-500"
          onClick={viewTicket}
        >
          <IoCloseCircleSharp />
        </button>
        <div className="grid md:grid-cols-5 items-center justify-evenly gap-10">
          <div className="size-24 bg-sky-200 rounded-full  drop-shadow</div>-2xl absolute left-0 overflow-hidden"></div>
          <p className="text-center col-span-3 text-xl border-b-2 md:hidden">
            <span className="text-sky-300">Tour</span> Ticket
          </p>
          <div className="hidden md:block">
            <p className="md:text-4xl text-sky-300 tracking-widest relative">
              Tour <br />
              <span className="text-md text-black md:text-xl tracking-widest">
                Ticket
              </span>
            </p>
          </div>

          <div className="overflow-x-auto col-span-3">
            <h1 className="flex justify-center items-center gap-1 text-xl tracking-widest bg-white mb-2 rounded-lg text-sky-400 font-serif">
              <span>
                <CiLocationArrow1 />
              </span>
              {city}
            </h1>
            <table className="table">
              <tbody className="border-2 border-sky-200 rounded-md">
                <tr className="hover">
                  <td>Traveler Name: </td>
                  <td>Sakib Nahid</td>
                </tr>

                <tr className="hover">
                  <td>Co-Travelers:</td>
                  <td>{travelers}</td>
                </tr>
                <tr className="hover">
                  <td>Journey Date:</td>
                  <td>{date}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <span className="text-6xl flex">
              <ImBarcode />
              <ImBarcode />
            </span>
            <span className="text-xs">SN:{ticketID}</span>
          </p>
        </div>
        <p className="text-xs flex justify-end gap-1 tracking-tighter relative bottom-4 right-6 md:static md:mt-4">
          <GoVerified />
          Powered by JourneyGenie
        </p>
      </div>
    </div>
  );
};

export default Ticket;
