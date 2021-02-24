import styled from 'styled-components';

import { IWind } from '../../interfaces';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.tilesBackground};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};
  user-select: none;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    padding: 10px 0;
    transition: background 0.3s;

    &:first-child {
      border-radius: 15px 15px 0 0;
    }

    &:last-child {
      border-radius: 0 0 15px 15px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #999;
    }

    &:hover {
      background: #ccc;
    }

    p:first-child {
      margin-bottom: 5px;
      font-weight: 700;
    }

    p:last-child {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;

    div:not(:last-child) {
      border-bottom: none;
      border-right: 1px solid #999;
    }

    div:first-child {
      border-radius: 15px 0 0 15px;
    }

    div:last-child {
      border-radius: 0 15px 15px 0;
    }
  }

  ${({ theme }) => theme.media.hd} {
    p {
      font-size: 2rem;
    }
  }
`;

interface WindConditionsProps {
  wind: IWind;
}

const WindConditions: React.FC<WindConditionsProps> = ({ wind: { speed, direction, degree } }) => {
  return (
    <Container>
      <div>
        <p>Wind Speed</p>
        <p>{speed} km/h</p>
      </div>
      <div>
        <p>Wind Direction</p>
        <p>{direction}</p>
      </div>
      <div>
        <p>Wind Degree</p>
        <p>{degree}</p>
      </div>
    </Container>
  );
};

export default WindConditions;
