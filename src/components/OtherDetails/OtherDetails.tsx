import styled from 'styled-components';

import DayDetails from './subcomponents/DayDetails';
import AirDetails from './subcomponents/AirDetails';
import TemperatureDetails from './subcomponents/TemperatureDetails';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    'day day'
    'air air'
    'temp temp';
  margin-bottom: 50px;
  background: ${({ theme }) => theme.colors.tilesBackground};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};

  ${({ theme }) => theme.media.tablet} {
    grid-column: 1/3;
    margin-bottom: 0;

    grid-template-rows: 40% 60%;
    grid-template-areas:
      'day day'
      'air temp';
  }

  ${({ theme }) => theme.media.desktop} {
    grid-column: 2/3;
  }
`;

interface OtherDetailsProps {
  air: {
    index: number;
    pm2_5: number;
    pm10: number;
    no2: number;
    so2: number;
    o3: number;
  };
  temperatureInfo: {
    min: number;
    max: number;
    avg: number;
  };
}

const OtherDetails: React.FC<OtherDetailsProps> = ({ air, temperatureInfo }) => {
  return (
    <Container>
      <DayDetails />
      <AirDetails air={air} />
      <TemperatureDetails temperatureInfo={temperatureInfo} />
    </Container>
  );
};

export default OtherDetails;
