import styled from 'styled-components';
import { Sunny, Moon } from '@styled-icons/ionicons-solid';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: pink;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
`;

const DayDetails = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid #999;

    &:nth-child(even) {
      border-left: 1px solid #999;
    }

    ${({ theme }) => theme.media.tablet} {
      flex-basis: 25%;
    }
  }
`;

const SunIcon = styled(Sunny)`
  height: 40px;
`;

const MoonIcon = styled(Moon)`
  height: 40px;
`;

const AirDetails = styled.div`
  margin: 10px 0;
  padding: 5px 20px;
  border-bottom: 1px solid #999;

  & > p {
    font-weight: 700;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    padding: 5px 20px;
    color: white;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.fontSecondary};
    border-bottom: 10px solid black;
    border-radius: 10px;

    p:first-child {
      font-size: 2rem;
    }
  }

  ul {
    display: flex;
    list-style-type: none;

    li {
      flex-grow: 1;
      text-align: center;

      p:first-child {
        font-weight: 700;
      }

      p:last-child {
        font-size: 0.7rem;
        font-weight: 500;
      }
    }
  }
`;

const TemperatureDetails = styled.div`
  margin: 10px 0;
  padding: 5px 20px;
  font-weight: 500;
  list-style-type: none;

  & > p {
    font-weight: 700;
    margin-bottom: 20px;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
  }
`;

const OtherDetails = () => {
  return (
    <Container>
      <DayDetails>
        <div>
          <SunIcon />
          <p>Sunrise Time</p>
          <p>06:50 AM</p>
        </div>
        <div>
          <SunIcon />
          <p>Sunset Time</p>
          <p>04:38 PM</p>
        </div>
        <div>
          <MoonIcon />
          <p>Moonrise Time</p>
          <p>07:13 AM</p>
        </div>
        <div>
          <MoonIcon />
          <p>Moonset Time</p>
          <p>04:01 PM</p>
        </div>
      </DayDetails>
      <AirDetails>
        <p>Air Quality Index (AQI)</p>
        <div>
          <p>5</p>
          <p>Good</p>
        </div>
        <ul>
          <li>
            <p>4</p>
            <p>pm2.5</p>
          </li>
          <li>
            <p>5</p>
            <p>pm10</p>
          </li>
          <li>
            <p>5</p>
            <p>NO2</p>
          </li>
          <li>
            <p>5</p>
            <p>SO2</p>
          </li>
          <li>
            <p>70</p>
            <p>03</p>
          </li>
        </ul>
      </AirDetails>
      <TemperatureDetails>
        <p>Temperature-Info</p>
        <ul>
          <li>
            <p>Min Temp</p>
            <p>-13</p>
          </li>
          <li>
            <p>Max Temp</p>
            <p>-10</p>
          </li>
          <li>
            <p>Avg Temp</p>
            <p>-11</p>
          </li>
        </ul>
      </TemperatureDetails>
    </Container>
  );
};

export default OtherDetails;
