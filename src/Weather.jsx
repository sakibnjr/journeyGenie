import { CiTempHigh } from "react-icons/ci";
import { TbMoodSmile } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";
import { GoInfo } from "react-icons/go";

function Weather({ weatherInfo }) {
  return (
    <div>
      {weatherInfo && (
        <div className="border-2 rounded-xl bg-white p-2 shadow-md h-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center justify-center place-items-center h-full dark:text-black">
            <p className="flex items-center gap-2">
              <span className="text-xl text-sky-600">
                <CiTempHigh />
              </span>
              {weatherInfo.temperature}{" "}
            </p>

            <p className="flex items-center gap-2">
              <span className="text-xl text-sky-600">
                <TbMoodSmile />
              </span>
              {weatherInfo.feelsLike}{" "}
            </p>

            <p className="flex items-center gap-2">
              <span className="text-xl text-sky-600">
                <WiHumidity />
              </span>
              {weatherInfo.humidity}
            </p>

            <p className="flex items-center gap-2">
              <span className="text-xl text-sky-600">
                <FaWind />
              </span>
              {weatherInfo.wind}
            </p>

            <p className="flex items-center gap-2">
              <span className="text-xl text-sky-600">
                <GoInfo />
              </span>
              {weatherInfo.condition}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
