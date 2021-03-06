import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useQuery } from 'react-query';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import WindConditions from './components/WindConditions/WindConditions';
import OtherDetails from './components/OtherDetails/OtherDetails';

import theme from './utils/theme';
import GlobalFonts from './fonts/fonts';

import { AppState } from './store';
import {
  setCityCoords,
  setCurrentWeather,
  setWind,
  setAir,
  setTemperatureInfo,
  setAstronomicalData,
} from './store/actions';

import {
  fetchWeatherConditions,
  fetchAirConditions,
  fetchAstronomicalData,
} from './api/api';

import {
  ICurrentWeather,
  IWind,
  ITemperatureInfo,
  IAir,
  IAstronomicalData,
  ICityCoords,
} from './interfaces';

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

const WeatherPanelGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;

  ${({ theme }) => theme.media.tablet} {
    grid-template-columns: 2fr 1fr;
  }

  ${({ theme }) => theme.media.desktop} {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto auto;
  }

  ${({ theme }) => theme.media.hd} {
    grid-template-columns: 3fr 7fr;
    grid-template-rows: auto auto;
    gap: 25px;
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

interface IProps {
  searchedCityName: string;
  cityCoords: ICityCoords;
  setCityCoords: (coords: ICityCoords) => void;
  setCurrentWeather: (currentWeather: ICurrentWeather) => void;
  setWind: (wind: IWind) => void;
  setAir: (air: IAir) => void;
  setTemperatureInfo: (temperatureInfo: ITemperatureInfo) => void;
  setAstronomicalData: (astronomicalData: IAstronomicalData) => void;
}

const App: React.FC<IProps> = ({
  searchedCityName,
  cityCoords,
  setCityCoords,
  setCurrentWeather,
  setWind,
  setAir,
  setTemperatureInfo,
  setAstronomicalData,
}) => {
  const { data: weatherData, error, isSuccess, isLoading } = useQuery(
    ['weather', searchedCityName],
    () => fetchWeatherConditions(searchedCityName)
  );
  const { data: airData } = useQuery(['air', cityCoords], () =>
    fetchAirConditions(cityCoords)
  );
  const { data: astroData } = useQuery(['astro', cityCoords], () =>
    fetchAstronomicalData(cityCoords)
  );

  useEffect(() => {
    if (weatherData) {
      setCityCoords(weatherData?.cityCoords);
      setCurrentWeather(weatherData?.currentWeather);
      setWind(weatherData?.wind);
      setTemperatureInfo(weatherData?.temperatureInfo);
    }
    if (airData) {
      setAir(airData);
    }

    if (astroData) {
      setAstronomicalData(astroData);
    }
  }, [weatherData, airData, astroData]);

  const renderWeatherPanel = () => {
    if (isLoading) {
      return <Loading>Looking for the weather</Loading>;
    }

    if (isSuccess) {
      return (
        <WeatherPanelGrid>
          <CurrentWeather />
          <WindConditions />
          <OtherDetails />
        </WeatherPanelGrid>
      );
    }

    if (error) {
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
        <SearchBar />
        {renderWeatherPanel()}
      </Wrapper>
    </ThemeProvider>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    searchedCityName: state.searchedCityName,
    cityCoords: state.cityCoords,
  };
};

const mapDispatchToProps = {
  setCityCoords,
  setCurrentWeather,
  setWind,
  setAir,
  setTemperatureInfo,
  setAstronomicalData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
