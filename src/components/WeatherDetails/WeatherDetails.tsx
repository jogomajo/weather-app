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
    grid-template-columns: 30% 70%;
    grid-template-rows: auto auto;
    gap: 30px;
  }
`;

const WeatherDetails = () => {
  return (
    <Grid>
      <CurrentWeather />
      <WindConditions />
      <OtherDetails />
    </Grid>
  );
};

export default WeatherDetails;
