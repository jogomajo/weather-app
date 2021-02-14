import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 10px 0; */
  background: pink;
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
    transition: background-color 0.3s;

    p:first-child {
      margin-bottom: 5px;
      font-weight: 700;
    }

    p:last-child {
      font-weight: 500;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #999;
    }

    &:nth-of-type(1):hover {
      background-color: #ccc;
      border-radius: 15px 15px 0 0;
    }

    &:nth-of-type(2):hover {
      background-color: #ccc;
    }

    &:nth-of-type(3):hover {
      background-color: #ccc;
      border-radius: 0 0 15px 15px;
    }
  }

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;

    div:not(:last-child) {
      border-bottom: none;
      border-right: 1px solid #999;
    }
  }
`;

const WindConditions = () => {
  return (
    <Container>
      <div>
        <p>Wind Speed</p>
        <p>28 km/h</p>
      </div>
      <div>
        <p>Wind Direction</p>
        <p>NW</p>
      </div>
      <div>
        <p>Wind Degree</p>
        <p>310</p>
      </div>
    </Container>
  );
};

export default WindConditions;
