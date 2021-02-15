import styled from 'styled-components';

const Container = styled.div`
  grid-area: air;

  /* display: flex;
  flex-direction: column;
  justify-content: center; */

  padding: 20px;
  border-bottom: 1px solid #999;

  & > p {
    font-weight: 600;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 10px 0;
    padding: 5px 20px;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-bottom: 10px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;

    p:first-child {
      font-size: 2rem;
      font-weight: 800;
    }

    p:last-child {
      font-weight: 700;
      font-size: 1.2rem;
      color: #666;
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
        color: ${({ theme }) => theme.colors.primary};
      }

      p:last-child {
        font-size: 0.7rem;
        font-weight: 500;
      }
    }
  }

  ${({ theme }) => theme.media.tablet} {
    border-right: 1px solid #999;
    border-bottom: none;
  }

  ${({ theme }) => theme.media.hd} {
    & > p {
      font-size: 1.8rem;
    }

    div {
      margin-top: 30px;
      height: 90px;

      p:first-child {
        font-size: 3.5rem;
      }

      p:last-child {
        font-size: 2rem;
      }
    }

    ul {
      margin-top: 30px;
      li {
        p:first-child {
          font-size: 1.8rem;
        }

        p:last-child {
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
    }
  }
`;

const AirDetails = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default AirDetails;
