import Weather from "./Weather";
import { GiPathDistance } from "react-icons/gi";
import { CiTimer } from "react-icons/ci";
import { GiTrafficLightsRed } from "react-icons/gi";

import { CiLocationOn } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";

import "./styles.css";

const Recommendation = ({
  city,
  setCity,
  getWeather,
  weatherInfo,
  date,
  travelers,
  clicked,
}) => {
  return (
    <div className="mx-2 lg:mx-12 border-2 p-4 rounded-md shadow-md">
      {city !== null && clicked && (
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
              <CiLocationOn />
              <span className="md:hidden">{city}</span>
              <span className="hidden md:block">Destination: {city}</span>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row justify-between mx-10 items-start my-4">
            <p className="flex items-center bg-sky-50 gap-2 px-4 rounded-xl">
              <GiPathDistance />
              Distance:
            </p>
            <p className="flex items-center bg-sky-50 gap-2 px-4 rounded-xl">
              <CiTimer />
              Time:
            </p>
            <p className="flex items-center bg-sky-50 gap-2 px-4 rounded-xl">
              <GiTrafficLightsRed />
              Traffic:
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-evenly items-center">
            <div>
              <h1>Availabe Packages</h1>
              <p>Journey Date: {date}</p>
              <p>Total Travellers: {travelers}</p>
            </div>
            <div>
              <h1>Weather Conditions</h1>
              <Weather
                city={city}
                setCity={setCity}
                getWeather={getWeather}
                weatherInfo={weatherInfo}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendation;
