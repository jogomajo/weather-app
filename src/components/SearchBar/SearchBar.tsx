import styled from 'styled-components';
import { Location } from '@styled-icons/ionicons-solid';

const Bar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 5px 20px;
  background: pink;
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};

  ${({ theme }) => theme.media.tablet} {
    padding: 10px 40px;
  }

  ${({ theme }) => theme.media.desktop} {
    padding: 20px 80px;
  }
`;

const CityNameWrapper = styled.div`
  display: flex;
  min-width: 300px;
`;

const Icon = styled(Location)`
  color: ${({ theme }) => theme.colors.fontSecondary};
  height: 40px;

  ${({ theme }) => theme.media.tablet} {
    height: 50px;
  }
`;

const CityName = styled.p`
  align-self: flex-end;
  padding-right: 5px;
  font-size: 2rem;
  font-weight: 700;
`;

const CountryName = styled.p`
  padding-top: 10px;
  font-weight: 700;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  padding: 5px 0;
  height: 40px;
  filter: drop-shadow(${({ theme }) => theme.shadow});

  ${({ theme }) => theme.media.tablet} {
    height: 50px;
  }

  ${({ theme }) => theme.media.desktop} {
    height: 55px;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  height: 100%;
  max-width: 800px;
  padding-left: 10px;
  border: none;
  border-radius: 15px 0 0 15px;
  outline: none;
`;

const Button = styled.button`
  height: 100%;
  width: 80px;
  background-color: ${({ theme }) => theme.colors.fontSecondary};
  font-size: 18px;
  border: none;
  color: white;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
  outline: none;
`;

const SearchBar = () => {
  return (
    <Bar>
      <CityNameWrapper>
        <Icon />
        <CityName>Lublin</CityName>
        <CountryName>/ Poland</CountryName>
      </CityNameWrapper>
      <InputWrapper>
        <Input type="text" placeholder="search location..." />
        <Button>search</Button>
      </InputWrapper>
    </Bar>
  );
};

export default SearchBar;
