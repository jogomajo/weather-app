import { connect } from 'react-redux';
import styled from 'styled-components';
import { Sunny, Moon } from '@styled-icons/ionicons-solid';

import { IAstronomicalData } from '../../../interfaces';
import { AppState } from '../../../store';

const Container = styled.div`
  grid-area: day;

  display: flex;
  flex-wrap: wrap;

  div {
    flex-basis: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
    border-bottom: 1px solid #999;
    transition: background 0.3s;

    &:first-child {
      border-radius: 15px 0 0 0;
    }

    &:nth-child(2) {
      border-radius: 0 15px 0 0;
    }

    &:nth-child(even) {
      border-left: 1px solid #999;
    }

    &:hover {
      background: #ccc;
    }

    p {
      font-size: 0.8rem;

      &:first-of-type {
        margin: 10px 0 5px 0;
        font-weight: 700;
      }
    }

    ${({ theme }) => theme.media.tablet} {
      flex-basis: 25%;

      &:nth-child(2) {
        border-right: 1px solid #999;
      }

      &:nth-child(2) {
        border-radius: 0;
      }

      &:last-child {
        border-radius: 0 15px 0 0;
      }
    }

    ${({ theme }) => theme.media.desktop} {
      p {
        font-size: 0.9rem;
      }
    }

    ${({ theme }) => theme.media.hd} {
      p {
        font-size: 1.5rem;
      }
    }
  }
`;

const SunIcon = styled(Sunny)`
  height: 40px;
  color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.media.hd} {
    height: 70px;
  }
`;

const MoonIcon = styled(Moon)`
  height: 40px;
  color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.media.hd} {
    height: 70px;
  }
`;

interface DayDetailsProps {
  astronomicalData: IAstronomicalData;
}

const DayDetails: React.FC<DayDetailsProps> = ({
  astronomicalData: { sunrise, sunset, moonrise, moonset },
}) => {
  return (
    <Container>
      <div>
        <SunIcon />
        <p>Sunrise Time</p>
        <p>{sunrise}</p>
      </div>
      <div>
        <SunIcon />
        <p>Sunset Time</p>
        <p>{sunset}</p>
      </div>
      <div>
        <MoonIcon />
        <p>Moonrise Time</p>
        <p>{moonrise}</p>
      </div>
      <div>
        <MoonIcon />
        <p>Moonset Time</p>
        <p>{moonset}</p>
      </div>
    </Container>
  );
};

const mapStateToProps = (state: AppState) => {
  const { sunrise, sunset, moonrise, moonset } = state.astronomicalData;

  return {
    astronomicalData: {
      sunrise,
      sunset,
      moonrise,
      moonset,
    },
  };
};

export default connect(mapStateToProps)(DayDetails);
