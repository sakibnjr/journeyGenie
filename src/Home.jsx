import { useState } from "react";
import TourInput from "./TourInput";
import TourList from "./TourList";
import TourCategory from "./TourCategory";
import Recommendation from "./Recommendation";

const Home = ({ open }) => {
  const [tourTitle, setTourTitle] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [travelers, setTravelers] = useState(0);
  const [categoryClicked, setCategoryClicked] = useState(false);
  const [clicked, setClicked] = useState(false);

  function changeCategory(title) {
    setTourTitle(title);
    setCategoryClicked(true);
  }

  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  function getWeather() {
    setClicked((clicked) => !clicked);
    const apiKey = "f87dae90b1b8a72f7f2f9c780bd9208b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let MT = Math.round(data.main.temp);
        let FL = Math.round(data.main.feels_like);

        const weather = {
          location: `Weather in ${data.name}`,
          temperature: `Temperature: ${MT} C`,
          feelsLike: `Feels Like: ${FL} C`,
          humidity: `Humidity: ${data.main.humidity} %`,
          wind: `Wind: ${data.wind.speed} km/h`,
          condition: `Weather Condition: ${data.weather[0].description}`,
        };

        setWeatherInfo(weather);
      })

      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      <div className="mb-6">
        <TourInput
          open={open}
          city={city}
          setCity={setCity}
          getWeather={getWeather}
          setDate={setDate}
          setTravelers={setTravelers}
        />
      </div>
      <div className="mb-6">
        <Recommendation
          open={open}
          city={city}
          setCity={setCity}
          getWeather={getWeather}
          weatherInfo={weatherInfo}
          date={date}
          travelers={travelers}
          clicked={clicked}
        />
      </div>
      <div className="mb-6">
        <TourCategory open={open} changeCategory={changeCategory} />
      </div>
      <div className="mb-6">
        <TourList tourTitle={tourTitle} categoryClicked={categoryClicked} />
      </div>
    </div>
  );
};

export default Home;
