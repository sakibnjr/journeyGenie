function Weather({ weatherInfo }) {
  return (
    <div>
      {weatherInfo && (
        <div>
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
