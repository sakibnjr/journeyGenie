import Weather from "./Weather";
const Recommendation = ({ city, setCity, getWeather, weatherInfo }) => {
  return (
    <div className="w-full bg-slate-400">
      <div className="flex justify-around">
        <h1 className="flex">
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>
          From:
        </h1>

        <h1 className="flex">
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
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </span>
          Destination:
        </h1>
      </div>

      <div className="flex justify-around">
        <p>Total Distance: </p>
        <p>Required Time: </p>
        <p>Traffic Condition: </p>
      </div>
      <div className="flex justify-around">
        <div>
          <h1>Availabe Packages</h1>
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
  );
};

export default Recommendation;
