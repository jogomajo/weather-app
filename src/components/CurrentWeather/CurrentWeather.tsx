import styled from 'styled-components';
import { Rainy } from '@styled-icons/ionicons-solid';

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

  ${({ theme }) => theme.media.hd} {
    margin: 70px 0;
    font-size: 4rem;
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

const Icon = styled(Rainy)`
  color: white;
  height: 40px;

  ${({ theme }) => theme.media.tablet} {
    height: 50px;
  }

  ${({ theme }) => theme.media.hd} {
    height: 70px;
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
  weather: {
    main: any;
    weather: any;
  };
}

const CurrentWeather: React.FC<CurrentWeatherProps> = ({ weather: { main, weather } }) => {
  return (
    <Container>
      <Title>Current Weather</Title>
      <Temperature>{`${main.temp} *C`}</Temperature>
      <Sky>
        <Icon />
        <IconDescription>{weather[0].description}</IconDescription>
      </Sky>
      <OtherConditions>
        <li>
          <p>RealFeel</p>
          <p>{main.feels_like}</p>
        </li>
        <li>
          <p>Humidity</p>
          <p>{main.humidity}</p>
        </li>
        <li>
          <p>Pressure</p>
          <p>{main.pressure}</p>
        </li>
        <li>
          <p>UV-Index</p>
          <p>1</p>
        </li>
      </OtherConditions>
    </Container>
  );
};

export default CurrentWeather;
