import Weather from "./Weather";
import { GiPathDistance } from "react-icons/gi";

import { GiTrafficLightsRed } from "react-icons/gi";

import { CiLocationOn } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";
import { RxCountdownTimer } from "react-icons/rx";
import { SiGooglemaps } from "react-icons/si";
import { IoCloseCircleSharp } from "react-icons/io5";

import "./styles.css";

const Recommendation = ({
  city,
  setCity,
  getWeather,
  weatherInfo,
  date,
  travelers,
  clicked,
  hideRecommendation,
  viewTicket,
}) => {
  const tourDetails = [
    {
      id: 2,
      city: "Cox's Bazar",
      distance: "383 km",
      suggested: "Good for traveling",
      time: "8 hours 12mins",
      traffic: "Medium Traffic",
      fastestRoute: true,
      title: "Cox's Bazar Beach",
      shortDescription:
        "The longest natural sea beach in the world, known for its golden sand and stunning sunsets.",
      category: "Family Friendly",
      image: "image/coxsbazar.jpg",
      cost: 3499,
    },
    {
      id: 12,
      city: "Saint Martin",
      title: "Saint Martin's Island",
      shortDescription:
        "A small coral island known for its beaches, coral reefs, and marine life.",
      category: "Friend Circle",
      image: "image/saintmartins.jpg",
      cost: 3799,
      distance: "456 km",
      suggested: "Good for traveling",
      time: "Approx. 9 hours",
      traffic: "Unknown Traffic",
      fastestRoute: true,
    },
    {
      id: 14,
      city: "Bandarban",
      title: "Bandarban Hill Tracts",
      shortDescription:
        "A mountainous region with diverse indigenous communities, waterfalls, and hiking trails.",
      category: "Friend Circle",
      image: "image/bandarban.jpg",
      cost: 1699,
      distance: "314 km",
      time: "6 hours 23mins",
      suggested: "Good for traveling",
      traffic: "Normal Traffic",
      fastestRoute: false,
    },
  ];

  const displayByCity = tourDetails.filter((tour) => tour.city === city);

  return (
    <div className="mx-2 lg:mx-12 bg-sky-50 dark:bg-slate-500 border-2 p-4 rounded-md shadow-md relative">
      {city !== null && clicked && (
        <div>
          <button
            className="text-4xl absolute right-[-14px] top-[-14px] drop-shadow-xl text-red-500"
            onClick={hideRecommendation}
          >
            <IoCloseCircleSharp />
          </button>
          <div>
            <div className="flex justify-around items-center">
              <h1 className="flex md:text-2xl items-center text-sky-400">
                <CiLocationOn />
                <span className="md:hidden">Sayedabad</span>
                <span className="hidden md:block">From: Sayedabad</span>
              </h1>
              <p className="flex typewriter text-sky-950 items-center">
                <span className="md:hidden">&gt;&gt;</span>
                <span className="hidden md:block">
                  &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
                </span>
                <span className="text-xl mx-2">
                  <FaCarSide />
                </span>
                <span className="md:hidden">&gt;&gt;</span>
                <span className="hidden md:block">
                  &gt;&gt;&gt;&gt;&gt;&gt;&gt;&gt;
                </span>
              </p>
              <h1 className="flex md:text-2xl items-center text-rose-400">
                <SiGooglemaps />

                <span className="md:hidden">{city}</span>
                <span className="hidden md:block">Destination: {city}</span>
              </h1>
            </div>

            <div className="flex flex-col gap-4 md:flex-row justify-evenly items-center my-4">
              <p className="flex items-center bg-white gap-2 px-4 rounded-md drop-shadow-md dark:text-black">
                <span className="text-xl">
                  <GiPathDistance />
                </span>

                {displayByCity.map((tour) => tour.distance)}
              </p>
              <p className="flex items-center bg-white gap-2 px-4 rounded-md drop-shadow-md dark:text-black">
                <span className="text-xl">
                  <RxCountdownTimer />
                </span>

                {displayByCity.map((tour) => tour.time)}
              </p>
              <p className="flex items-center bg-white gap-2 px-4 rounded-md drop-shadow-md dark:text-black">
                <span className="text-xl">
                  <GiTrafficLightsRed />
                </span>

                {displayByCity.map((tour) => tour.traffic)}
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-10 justify-evenly mx-10 items-center">
              <div>
                <h1 className="text-lg md:text-xl dark:text-white mb-2">
                  Availabe Packages
                </h1>
                <div className="card card-normal bg-white w-96 h-64 border-2 drop-shadow-md">
                  <figure>
                    <img
                      src={displayByCity.map((tour) => tour.image)}
                      alt={displayByCity.map((tour) => tour.title)}
                      className="w-full"
                    />
                  </figure>
                  <h1 className="my-2 pl-2 text-xl tracking-wider dark:text-black">
                    {displayByCity.map((tour) => tour.title)}
                  </h1>
                  <p className="mb-2 pl-2 font-bold dark:text-black">
                    BDT: {displayByCity.map((tour) => tour.cost)}
                    <span className="absolute font-thin bg-rose-500 text-sm text-sky-50 p-1 rounded-xl left-80 bottom-60">
                      Sponsored
                    </span>
                  </p>
                  <button
                    className="w-full bg-sky-400 text-white rounded-b-xl rounded-t-none py-1"
                    onClick={viewTicket}
                  >
                    Get Ticket
                  </button>
                </div>
              </div>
              <div className="mt-2">
                <h1 className="text-lg md:text-xl mb-2 dark:text-white">
                  Weather at {city}
                </h1>
                <Weather
                  city={city}
                  setCity={setCity}
                  getWeather={getWeather}
                  weatherInfo={weatherInfo}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
