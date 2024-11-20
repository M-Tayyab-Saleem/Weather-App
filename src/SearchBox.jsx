import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";
import { colors } from "@mui/material";

export default function SearchBox({updateInfo}) {
    let [city , setCity] = useState("");
    let [error, setError] = useState (false)
    
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7bb80d69f34b22e19eff065caec3be91";

    let checkWheather = async ()=>{
        try{
         let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
         let result = await response.json();
         let weather = {
            city : result.name,
            temp : result.main.temp,
            humidity: result.main.humidity,
            mintemp: result.main.temp_min,
            feelsLike: result.main.feels_like,
            maxtemp: result.main.temp_max,
            description: result.weather[0].description

         };
        return weather;
    } catch(err){
        throw err;
    }
    }
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async(event)=>{
        try{
        event.preventDefault();
        setCity("");
        let newInfo = await checkWheather();
        updateInfo(newInfo);
        } catch(err){
            setError(true);
        }
    }


  return (
    
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange}required/>
        <br /><br />
        <Button variant="contained" type="Submit">
          Search
        </Button>
        {error && <p style={{color : "red"}}>No Such Place Information is available on our System</p>}
      </form>
    </div>
  );
}
