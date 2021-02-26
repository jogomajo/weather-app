import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

import { fetchWeatherConditions, fetchAirConditions, fetchAstronomicalData } from './api/api';

import { ICurrentWeather, IWind, ITemperatureInfo, IAir, IAstronomicalData } from './interfaces';

import theme from './utils/theme';
import GlobalFonts from './fonts/fonts';

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

const Loading = styled.h1`
  margin-top: 10vh;
  text-align: center;

  ::after {
    content: '.';
    animation: dots 1.5s steps(5, end) infinite;
  }

  @keyframes dots {
    0%,
    20% {
      color: rgba(0, 0, 0, 0);
      text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    40% {
      color: black;
      text-shadow: 0.25em 0 0 rgba(0, 0, 0, 0), 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    60% {
      text-shadow: 0.25em 0 0 black, 0.5em 0 0 rgba(0, 0, 0, 0);
    }
    80%,
    100% {
      text-shadow: 0.25em 0 0 black, 0.5em 0 0 black;
    }
  }
`;

const ErrorMessage = styled.div`
  margin-top: 10vh;
  text-align: center;

  p:first-child {
    font-size: 1.4rem;
    font-weight: 500;
  }

  p:last-child {
    font-size: 2rem;
    margin-top: 20px;
    font-weight: 700;
  }

  ${({ theme }) => theme.media.hd} {
    p:first-child {
      font-size: 2rem;
    }

    p:last-child {
      font-size: 3rem;
    }
  }
`;

const App: React.FC = () => {
  const [searchedCityName, setSearchedCityName] = useState<string | null>('lublin');
  const [cityCoords, setCityCoords] = useState({
    city: 'lublin',
    country: 'PL',
    lon: 51,
    lat: 23,
  });
  const [currentWeather, setCurrentWeather] = useState<ICurrentWeather | undefined>();
  const [wind, setWind] = useState<IWind | undefined>();
  const [air, setAir] = useState<IAir | undefined>();
  const [temperatureInfo, setTemperatureInfo] = useState<ITemperatureInfo | undefined>();
  const [day, setDay] = useState<IAstronomicalData | undefined>();

  const { data: weatherData, error, isSuccess, isLoading } = useQuery(
    ['weather', searchedCityName],
    () => fetchWeatherConditions(searchedCityName)
  );
  const { data: airData, isSuccess: airFetchIsSuccess } = useQuery(['air', cityCoords], () =>
    fetchAirConditions(cityCoords)
  );
  const { data: astroData, isSuccess: astroFetchIsSuccess } = useQuery(['astro', cityCoords], () =>
    fetchAstronomicalData(cityCoords)
  );

  useEffect(() => {
    if (weatherData) {
      setCityCoords(weatherData?.cityCoords);
      setCurrentWeather(weatherData?.currentWeather);
      setWind(weatherData?.wind);
      setTemperatureInfo(weatherData?.temperatureInfo);
    }
  }, [weatherData]);

  useEffect(() => {
    if (airFetchIsSuccess) {
      setAir(airData);
    }

    if (astroFetchIsSuccess) {
      setDay(astroData);
    }
  }, [airData, astroData]);

  const renderWeatherPanel = () => {
    if (isLoading) {
      return <Loading>Looking for the weather</Loading>;
    }

    if (isSuccess) {
      return currentWeather && air && wind && temperatureInfo && day ? (
        <WeatherDetails
          weather={currentWeather}
          air={air}
          wind={wind}
          temperatureInfo={temperatureInfo}
          day={day}
        />
      ) : null;
    }

    if (error) {
      console.log(error);
      return (
        <ErrorMessage>
          <p>It seems that the given location doesn't exist...</p>
          <p>Try again!</p>
        </ErrorMessage>
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GlobalFonts />
      <Wrapper>
        <Header>Weather App</Header>
        {currentWeather && cityCoords ? (
          <SearchBar
            setCityName={setSearchedCityName}
            city={cityCoords.city}
            country={cityCoords.country}
          />
        ) : null}
        {renderWeatherPanel()}
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
