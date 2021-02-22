const WEATHER_KEY = '027a8465a4b7db22cb00cc2655cd0849';
const ASTRONOMY_KEY = '2180e19e9e834b95aa55747ecc772869';

export const fetchWeatherConditions = async (city: string | null): Promise<any> => {
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`;

  const fetchedData = await fetch(weatherURL);
  const weather = await fetchedData.json();

  return weather;
};

export const fetchAirConditions = async (coords: { lon: number; lat: number }) => {
  const { lat, lon } = coords;

  const airURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`;

  const fetchedData = await fetch(airURL);
  const air = await fetchedData.json();

  return air;
};

interface AstronomicalData {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
}

export const fetchAstronomicalData = async (coords: {
  lon: number;
  lat: number;
}): Promise<AstronomicalData> => {
  const { lon, lat } = coords;

  const astroURL = `https://api.ipgeolocation.io/astronomy?apiKey=${ASTRONOMY_KEY}&lat=${lat}&long=${lon}`;

  const fetchedData = await fetch(astroURL);
  const astroData = await fetchedData.json();
  const modifiedData: AstronomicalData = {
    sunrise: astroData.sunrise,
    sunset: astroData.sunset,
    moonrise: astroData.moonrise,
    moonset: astroData.moonset,
  };

  // console.log(modifiedData);

  return modifiedData;
};
