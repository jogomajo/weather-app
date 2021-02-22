import { useQuery } from 'react-query';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Navigation/Navigation';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

import { fetchWeatherConditions, fetchAirConditions } from './api/api';

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

const App: React.FC = () => {
  const [cityName, setCityName] = useState<string | null>('lublin');
  // const [weather, setWeather] = useState<any>(null);
  // const [air, setAir] = useState<any>(null);
  const [cityCoords, setCityCoords] = useState<{ lon: number; lat: number }>({ lon: 51, lat: 23 });
  const [currentWeather, setCurrentWeather] = useState({
    temp: 0,
    description: '',
    realFeel: 0,
    humidity: 0,
    pressure: 0,
    uvIndex: 0,
  });

  const weatherObject = {
    currentWeather: {
      temp: 0,
      description: '',
      realFeel: 0,
      humidity: 0,
      pressure: 0,
      uvIndex: 0,
    },
    wind: {
      speed: 0,
      direction: '',
      degree: 0,
    },
    day: {
      sunrise: '',
      sunset: '',
      moonrise: '',
      moonset: '',
    },
    air: {
      index: 0,
      pm2_5: 0,
      pm10: 0,
      no2: 0,
      so2: 0,
      o3: 0,
    },
    temperatureInfo: {
      min: 0,
      max: 0,
      avg: 0,
    },
  };

  const { data, isSuccess: weatherIsSuccess } = useQuery(['weather', cityName], () =>
    fetchWeatherConditions(cityName)
  );
  const { data: airData, isSuccess: airIsSuccess } = useQuery(['air', cityCoords], () =>
    fetchAirConditions(cityCoords)
  );

  useEffect(() => {
    setWeather(data);
  }, [data]);

  useEffect(() => {
    if (weather && weather.coord) {
      const coords = {
        lat: Math.round(weather.coord.lat),
        lon: Math.round(weather.coord.lon),
      };

      setCityCoords(coords);
    }
  }, [weather]);

  useEffect(() => {
    if (airIsSuccess) {
      setAir(airData.list[0]);
    }
  }, [airData]);

  console.log(weather);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header>Weather App</Header>
        {weather ? (
          <SearchBar setCityName={setCityName} city={weather.name} country={weather.sys.country} />
        ) : null}
        {weather ? <WeatherDetails weather={weather} /> : null}
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
