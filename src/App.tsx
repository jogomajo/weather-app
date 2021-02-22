import { useQuery } from 'react-query';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Navigation/Navigation';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

import { fetchWeatherConditions, fetchAirConditions, fetchAstronomicalData } from './api/api';

import theme from './utils/theme';
import { useEffect, useState } from 'react';

const GlobalStyles = createGlobalStyle`
  body { 
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
    box-sizing: border-box;
    user-select: none;
  }
  `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;

  ${({ theme }) => theme.media.tablet} {
    padding: 20px 30px;
  }

  ${({ theme }) => theme.media.hd} {
    padding: 20px 150px;
  }
`;

const evaluateDirection = (degrees: number) => {
  const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
  const value = Math.floor(degrees / 45);

  return directions[value % directions.length];
};

const App: React.FC = () => {
  const [cityName, setCityName] = useState<string | null>('lublin');

  const [cityCoords, setCityCoords] = useState({
    city: 'lublin',
    country: 'PL',
    lon: 51,
    lat: 23,
  });

  const [currentWeather, setCurrentWeather] = useState({
    temp: 0,
    description: '',
    realFeel: 0,
    humidity: 0,
    pressure: 0,
    uvIndex: 0,
  });

  const [wind, setWind] = useState({
    speed: 0,
    direction: '',
    degree: 0,
  });

  const [air, setAir] = useState({
    index: 0,
    pm2_5: 0,
    pm10: 0,
    no2: 0,
    so2: 0,
    o3: 0,
  });

  const [temperatureInfo, setTemperatureInfo] = useState({
    min: 0,
    max: 0,
    avg: 0,
  });

  const [day, setDay] = useState<any>({
    sunrise: '',
    sunset: '',
    moonrise: '',
    moonset: '',
  });

  const { data, isSuccess: weatherIsSuccess } = useQuery(['weather', cityName], () =>
    fetchWeatherConditions(cityName)
  );
  const { data: airData, isSuccess: airIsSuccess } = useQuery(['air', cityCoords], () =>
    fetchAirConditions(cityCoords)
  );
  const { data: astroData } = useQuery(['astro', cityCoords], () =>
    fetchAstronomicalData(cityCoords)
  );

  useEffect(() => {
    if (weatherIsSuccess) {
      setCityCoords({
        city: data.name,
        country: data.sys.country,
        lat: Math.round(data.coord.lat),
        lon: Math.round(data.coord.lon),
      });
      setCurrentWeather({
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        realFeel: Math.round(data.main.feels_like),
        humidity: data.main.humidity,
        pressure: data.main.pressure,
        uvIndex: 1,
      });
      setWind({
        speed: Math.round(data.wind.speed),
        direction: evaluateDirection(data.wind.deg),
        degree: data.wind.deg,
      });
      setTemperatureInfo({
        min: Math.round(data.main.temp_min),
        max: Math.round(data.main.temp_max),
        avg: Math.round((data.main.temp_max + data.main.temp_min) / 2),
      });
    }
  }, [data]);

  useEffect(() => {
    console.log(cityCoords);
    console.log(airData);
    if (airIsSuccess) {
      const { pm2_5, pm10, no2, so2, o3 } = airData.list[0].components;

      setAir({
        index: airData.list[0].main.aqi,
        pm2_5: Math.round(pm2_5),
        pm10: Math.round(pm10),
        no2: Math.round(no2),
        so2: Math.round(so2),
        o3: Math.round(o3),
      });

      setDay(astroData);
    }
  }, [airData]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header>Weather App</Header>
        {currentWeather ? (
          <SearchBar
            setCityName={setCityName}
            city={cityCoords.city}
            country={cityCoords.country}
          />
        ) : null}
        {currentWeather ? (
          <WeatherDetails
            weather={currentWeather}
            air={air}
            wind={wind}
            temperatureInfo={temperatureInfo}
          />
        ) : null}
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
