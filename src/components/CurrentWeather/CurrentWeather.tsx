import styled from 'styled-components';
import { Rainy } from '@styled-icons/ionicons-solid';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* margin: 10px 0; */
  padding: 5px 20px;
  background: pink;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
  user-select: none;

  /* ${({ theme }) => theme.media.tablet} {
    padding: 10px 40px;
  } */

  ${({ theme }) => theme.media.desktop} {
    grid-row: 1/3;
  }
`;

const Title = styled.p`
  align-self: flex-start;
  font-size: 1.3rem;
  font-weight: 700;
`;

const Temperature = styled.p`
  margin: 20px 0;
  font-size: 3rem;
  font-weight: 700;
`;

const Sky = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  background-color: ${({ theme }) => theme.colors.fontSecondary};
  border-radius: 15px;
`;

const Icon = styled(Rainy)`
  color: white;
  height: 40px;

  ${({ theme }) => theme.media.tablet} {
    height: 50px;
  }
`;

const IconDescription = styled.p`
  color: white;
  font-weight: 500;
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
`;

const CurrentWeather = () => {
  return (
    <Container>
      <Title>Current Weather</Title>
      <Temperature>- 9 *C</Temperature>
      <Sky>
        <Icon />
        <IconDescription>Blowing snow</IconDescription>
      </Sky>
      <OtherConditions>
        <li>
          <p>RealFeel</p>
          <p>-18</p>
        </li>
        <li>
          <p>Humidity</p>
          <p>67</p>
        </li>
        <li>
          <p>Pressure</p>
          <p>1024</p>
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
