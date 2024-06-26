import { useState } from "react";
import TourInput from "./TourInput";
import TourList from "./TourList";
import TourCategory from "./TourCategory";
import Recommendation from "./Recommendation";
import Ticket from "./Ticket";

const Home = ({ loginStatus }) => {
  const [tourTitle, setTourTitle] = useState("");
  const [weatherInfo, setWeatherInfo] = useState(null);
  const [travelers, setTravelers] = useState(0);
  const [categoryClicked, setCategoryClicked] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [showTicket, setShowTicket] = useState(false);

  const [city, setCity] = useState("");
  const [date, setDate] = useState("");

  function changeCategory(title) {
    setTourTitle(title);
    setCategoryClicked(true);
  }

  function viewTicket() {
    loginStatus === "Sign In"
      ? alert("Please Login First!")
      : setShowTicket((showTicket) => !showTicket);
    setClicked((clicked) => !clicked);
  }

  function hideRecommendation() {
    setClicked((clicked) => !clicked);
  }

  function getWeather() {
    if (city !== "" && date !== "" && travelers !== "") {
      setClicked(true);
    } else setClicked(false);

    const apiKey = "f87dae90b1b8a72f7f2f9c780bd9208b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let MT = Math.round(data.main.temp);
        let FL = Math.round(data.main.feels_like);

        const weather = {
          location: `Weather in ${data.name}`,
          temperature: `Temperature: ${MT}°C`,
          feelsLike: `Feels Like: ${FL}°C`,
          humidity: `Humidity: ${data.main.humidity} %`,
          wind: `Wind: ${data.wind.speed} km/h`,
          condition: ` ${data.weather[0].description}`,
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
          city={city}
          setCity={setCity}
          getWeather={getWeather}
          setDate={setDate}
          setTravelers={setTravelers}
        />
      </div>
      {showTicket && (
        <Ticket
          city={city}
          travelers={travelers}
          date={date}
          viewTicket={viewTicket}
        />
      )}

      <div className="mb-6">
        <Recommendation
          city={city}
          setCity={setCity}
          getWeather={getWeather}
          weatherInfo={weatherInfo}
          date={date}
          travelers={travelers}
          clicked={clicked}
          viewTicket={viewTicket}
          hideRecommendation={hideRecommendation}
        />
      </div>
      <div className="mb-6">
        <TourCategory changeCategory={changeCategory} />
      </div>
      <div className="mb-6">
        <TourList
          tourTitle={tourTitle}
          categoryClicked={categoryClicked}
          viewTicket={viewTicket}
        />
      </div>
    </div>
  );
};

export default Home;
