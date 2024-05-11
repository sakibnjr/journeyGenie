import { FaLocationArrow } from "react-icons/fa";

import { BsFillPeopleFill } from "react-icons/bs";

import { CiCalendarDate } from "react-icons/ci";

const TourInput = ({ open, setCity, getWeather, setDate, setTravelers }) => {
  return (
    <div
      className={`${
        open
          ? "mx-2 border-2 p-4 md:p-6  rounded-xl lg:mx-12 shadow-md blur-sm"
          : "mx-2 border-2 p-4 md:p-6  rounded-xl lg:mx-12 shadow-md bg-sky-50 dark:bg-slate-500"
      }`}
    >
      <p className="text-center text-lg lg:mx-28  border-b-2 mb-4 lg:mb-0 border-sky-200 rounded uppercase text-sky-950 tracking-wides">
        Enter Tour Details
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center md:my-6 gap-6">
        <div className="flex items-center gap-2">
          <span>
            <FaLocationArrow />
          </span>
          <input
            type="text"
            placeholder="Where to?"
            className="input input-bordered hover:input-info w-full max-w-xs"
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="flex justify-center items-center gap-2 w-96">
          <span>
            <CiCalendarDate />
          </span>
          <input
            type="date"
            className="input input-bordered hover:input-info w-full max-w-xs"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <span>
            <BsFillPeopleFill />
          </span>
          <input
            type="number"
            placeholder="Total travelers"
            className="input input-bordered hover:input-info w-full max-w-xs"
            onChange={(e) => setTravelers(e.target.value)}
          />
        </div>

        <button
          className=" border-2 w-full max-w-xs md:w-auto px-3 py-2 rounded-md bg-sky-400 text-white hover:drop-shadow-md flex justify-center gap-2"
          onClick={getWeather}
        >
          Search
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
};

export default TourInput;
