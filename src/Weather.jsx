function Weather({ city, setCity, getWeather, weatherInfo }) {
  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={getWeather}>Get Weather</button>
      {weatherInfo && (
        <div className="weather-info">
          <h3>{weatherInfo.location}</h3>
          <p>{weatherInfo.temperature}</p>
          <p>{weatherInfo.feelsLike}</p>
          <p>{weatherInfo.humidity}</p>
          <p>{weatherInfo.wind}</p>
          <p>{weatherInfo.condition}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
