import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Karachi",
    description: "overcast clouds",
    feelsLike: 38.9,
    humidity: 79,
    maxtemp: 31.9,
    mintemp: 31.9,
    temp: 31.9,
  });

  let updateInfo = (newInfo)=>{
    setWeatherInfo(newInfo)
  }
  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox weather={weatherInfo}/>
    </>
  );
}
