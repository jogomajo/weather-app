const KEY = '027a8465a4b7db22cb00cc2655cd0849';

export const fetchWeatherConditions = async (city: string | null): Promise<any> => {
  const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`;

  const fetchedData = await fetch(weatherURL);
  const weather = await fetchedData.json();

  return weather;
};

export const fetchAirConditions = async (coords: { lon: number; lat: number }) => {
  const { lat, lon } = coords;

  const airURL = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${KEY}`;

  const fetchedData = await fetch(airURL);
  const air = await fetchedData.json();

  return air;
};
