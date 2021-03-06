import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  Rainy,
  Cloud,
  Sunny,
  Thunderstorm,
  Snow,
  ReorderThree,
} from '@styled-icons/ionicons-solid';

import { ICurrentWeather } from '../../interfaces';
import { AppState } from '../../store';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background: ${({ theme }) => theme.colors.tilesBackground};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
  user-select: none;

  ${({ theme }) => theme.media.desktop} {
    grid-row: 1/3;
  }

  ${({ theme }) => theme.media.hd} {
    padding: 40px;
  }
`;

const Title = styled.p`
  align-self: flex-start;
  font-size: 1.3rem;
  font-weight: 700;

  ${({ theme }) => theme.media.hd} {
    font-size: 2.2rem;
  }
`;

const Temperature = styled.p`
  margin: 40px 0;
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  span {
    font-size: 2rem;
  }

  ${({ theme }) => theme.media.hd} {
    margin: 70px 0;
    font-size: 4rem;

    span {
      font-size: 3rem;
    }
  }
`;

const Sky = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;

  ${({ theme }) => theme.media.hd} {
    margin: 15px 0;
    padding: 10px 20px;
  }
`;

const Icon = styled.div`
  color: white;
  height: 40px;
  width: 40px;

  ${({ theme }) => theme.media.tablet} {
    height: 50px;
    width: 50px;
  }

  ${({ theme }) => theme.media.hd} {
    height: 70px;
    width: 70px;
  }
`;

const IconDescription = styled.p`
  color: white;
  font-weight: 500;

  ${({ theme }) => theme.media.hd} {
    font-size: 2rem;
  }
`;

const OtherConditions = styled.ul`
  margin-top: 15px;
  width: 100%;
  font-weight: 500;
  list-style-type: none;

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
  }

  ${({ theme }) => theme.media.hd} {
    font-size: 1.6rem;

    li {
      margin-bottom: 20px;
    }
  }
`;

interface CurrentWeatherProps {
  weather: ICurrentWeather;
}

const CurrentWeather: React.FC<CurrentWeatherProps> = (props) => {
  const {
    temp,
    weatherIcon,
    description,
    realFeel,
    humidity,
    pressure,
    uvIndex,
  } = props.weather;

  const chooseWeatherIcon = (icon: string) => {
    if (icon === 'Clear') return <Sunny />;
    if (icon === 'Clouds') return <Cloud />;
    if (icon === 'Snow') return <Snow />;
    if (icon === 'Rain' || icon === 'Drizzle') return <Rainy />;
    if (icon === 'Thunderstorm') return <Thunderstorm />;
    if (icon === 'Mist' || icon === 'Fog') return <ReorderThree />;
  };

  return (
    <Container>
      <Title>Current Weather</Title>
      <Temperature>
        {temp}
        <span>&#176;C</span>
      </Temperature>
      <Sky>
        <Icon>{chooseWeatherIcon(weatherIcon)}</Icon>
        <IconDescription>{description}</IconDescription>
      </Sky>
      <OtherConditions>
        <li>
          <p>RealFeel</p>
          <p>{`${realFeel}`}&#176;C</p>
        </li>
        <li>
          <p>Humidity</p>
          <p>{`${humidity}%`}</p>
        </li>
        <li>
          <p>Pressure</p>
          <p>{`${pressure} hPa`}</p>
        </li>
        <li>
          <p>UV-Index</p>
          <p>{uvIndex}</p>
        </li>
      </OtherConditions>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => {
  const {
    temp,
    weatherIcon,
    description,
    realFeel,
    humidity,
    pressure,
    uvIndex,
  } = state.currentWeather;

  return {
    weather: { temp, weatherIcon, description, realFeel, humidity, pressure, uvIndex },
  };
};

export default connect(mapStateToProps)(CurrentWeather);
