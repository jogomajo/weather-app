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
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weather }) => {
  return (
    <Grid>
      <CurrentWeather weather={weather} />
      <WindConditions />
      <OtherDetails />
    </Grid>
  );
};

export default WeatherDetails;
