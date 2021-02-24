import {
  ICityCoords,
  ICurrentWeather,
  IWind,
  IAir,
  ITemperatureInfo,
  IAstronomicalData,
} from '../interfaces';

const WEATHER_KEY = '027a8465a4b7db22cb00cc2655cd0849';
const ASTRONOMY_KEY = '2180e19e9e834b95aa55747ecc772869';

interface IWeatherConditions {
  cityCoords: ICityCoords;
  currentWeather: ICurrentWeather;
  wind: IWind;
  temperatureInfo: ITemperatureInfo;
}

const evaluateDirection = (degrees: number) => {
  const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
  const value = Math.floor(degrees / 45);

  return directions[value % directions.length];
};

export const fetchWeatherConditions = async (city: string | null): Promise<IWeatherConditions> => {
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;

  const fetchedData = await fetch(weatherURL);
  const weatherData = await fetchedData.json();

  const cityCoords: ICityCoords = {
    city: weatherData.name,
    country: weatherData.sys.country,
    lat: Math.round(weatherData.coord.lat),
    lon: Math.round(weatherData.coord.lon),
  };

  const currentWeather: ICurrentWeather = {
    temp: Math.round(weatherData.main.temp),
    weatherIcon: weatherData.weather[0].main,
    description: weatherData.weather[0].description,
    realFeel: Math.round(weatherData.main.feels_like),
    humidity: weatherData.main.humidity,
    pressure: weatherData.main.pressure,
    uvIndex: 1,
  };

  const wind: IWind = {
    speed: Math.round(weatherData.wind.speed),
    direction: evaluateDirection(weatherData.wind.deg),
    degree: weatherData.wind.deg,
  };

  const temperatureInfo: ITemperatureInfo = {
    min: Math.round(weatherData.main.temp_min),
    max: Math.round(weatherData.main.temp_max),
    avg: Math.round((weatherData.main.temp_max + weatherData.main.temp_min) / 2),
  };

  return { cityCoords, currentWeather, wind, temperatureInfo };
};

export const fetchAirConditions = async (coords: { lon: number; lat: number }): Promise<IAir> => {
  const { lat, lon } = coords;

  const airURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`;

  const fetchedData = await fetch(airURL);
  const air = await fetchedData.json();

  const { pm2_5, pm10, no2, so2, o3 } = air.list[0].components;

  const modifiedData = {
    index: air.list[0].main.aqi,
    pm2_5: Math.round(pm2_5),
    pm10: Math.round(pm10),
    no2: Math.round(no2),
    so2: Math.round(so2),
    o3: Math.round(o3),
  };

  return modifiedData;
};

export const fetchAstronomicalData = async (coords: {
  lon: number;
  lat: number;
}): Promise<IAstronomicalData> => {
  const { lon, lat } = coords;

  const astroURL = `https://api.ipgeolocation.io/astronomy?apiKey=${ASTRONOMY_KEY}&lat=${lat}&long=${lon}`;

  const fetchedData = await fetch(astroURL);
  const astroData = await fetchedData.json();

  const modifiedData: IAstronomicalData = {
    sunrise: astroData.sunrise,
    sunset: astroData.sunset,
    moonrise: astroData.moonrise,
    moonset: astroData.moonset,
  };

  return modifiedData;
};
