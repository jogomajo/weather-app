import styled from 'styled-components';

import CurrentWeather from '../CurrentWeather/CurrentWeather';
import OtherDetails from '../OtherDetails/OtherDetails';
import WindConditions from '../WindConditions/WindConditions';

const Container = styled.div``;

const WeatherDetails = () => {
  return (
    <Container>
      <CurrentWeather />
      <WindConditions />
      <OtherDetails />
    </Container>
  );
};

export default WeatherDetails;
