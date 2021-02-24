import styled from 'styled-components';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import OtherDetails from '../OtherDetails/OtherDetails';
import WindConditions from '../WindConditions/WindConditions';

import {
  ICurrentWeather,
  IAir,
  IWind,
  ITemperatureInfo,
  IAstronomicalData,
} from '../../interfaces';

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
  weather: ICurrentWeather;
  air: IAir;
  wind: IWind;
  temperatureInfo: ITemperatureInfo;
  day: IAstronomicalData;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  weather,
  air,
  wind,
  temperatureInfo,
  day,
}) => {
  return (
    <Grid>
      <CurrentWeather weather={weather} />
      <WindConditions wind={wind} />
      <OtherDetails air={air} temperatureInfo={temperatureInfo} day={day} />
    </Grid>
  );
};

export default WeatherDetails;
