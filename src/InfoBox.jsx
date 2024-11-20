import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import "./InfoBox.css";

export default function InfoBox({weather}) {
  
  let INIT_URL =
    "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let HOT_URL = "https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let COLD_URL = "https://images.pexels.com/photos/953626/pexels-photo-953626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let RAIM_URL = "https://images.pexels.com/photos/763398/pexels-photo-763398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="infobox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia sx={{ height: 140 }} image={weather.humidity > 80 ? RAIM_URL : weather.temp < 15 ?  COLD_URL:HOT_URL} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {weather.city} {weather.humidity > 80 ?  <ThunderstormIcon />: weather.temp < 15 ? <AcUnitIcon /> : < WbSunnyIcon /> } 
            </Typography>
            <Typography variant="body2" color="text.secondary" component="span">
              <p>Temperature = {weather.temp}&deg;C</p>
              <p>Humidity = {weather.humidity}</p>
              <p>Min-Temperature = {weather.mintemp}&deg;C</p>
              <p>Max-Temperature = {weather.maxtemp}&deg;C</p>
              <p>
                The weather can be described as {weather.description} and feels
                like {weather.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
