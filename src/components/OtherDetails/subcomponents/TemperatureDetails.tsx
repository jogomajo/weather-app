import styled from 'styled-components';

const Container = styled.div`
  grid-area: temp;
  padding: 20px;
  font-weight: 500;
  list-style-type: none;

  & > p {
    font-weight: 600;
    margin-bottom: 20px;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
  }

  ${({ theme }) => theme.media.hd} {
    & > p {
      margin-bottom: 30px;
      font-size: 1.8rem;
    }

    li {
      margin-bottom: 20px;
      p {
        font-size: 1.6rem;
      }
    }
  }
`;

interface TemperatureDetailsProps {
  temperatureInfo: {
    min: number;
    max: number;
    avg: number;
  };
}

const TemperatureDetails: React.FC<TemperatureDetailsProps> = ({
  temperatureInfo: { min, max, avg },
}) => {
  return (
    <Container>
      <p>Temperature-Info</p>
      <ul>
        <li>
          <p>Min Temp</p>
          <p>{min}</p>
        </li>
        <li>
          <p>Max Temp</p>
          <p>{max}</p>
        </li>
        <li>
          <p>Avg Temp</p>
          <p>{avg}</p>
        </li>
      </ul>
    </Container>
  );
};

export default TemperatureDetails;
