import styled from 'styled-components';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import OtherDetails from '../OtherDetails/OtherDetails';
import WindConditions from '../WindConditions/WindConditions';

const Grid = styled.div`
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

interface WeatherDetailsProps {
  weather: any;
  air: {
    index: number;
    pm2_5: number;
    pm10: number;
    no2: number;
    so2: number;
    o3: number;
  };
  wind: {
    speed: number;
    direction: string;
    degree: number;
  };
  temperatureInfo: {
    min: number;
    max: number;
    avg: number;
  };
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather, air, wind, temperatureInfo }) => {
  return (
    <Grid>
      <CurrentWeather weather={weather} />
      <WindConditions wind={wind} />
      <OtherDetails air={air} temperatureInfo={temperatureInfo} />
    </Grid>
  );
};

export default WeatherDetails;
