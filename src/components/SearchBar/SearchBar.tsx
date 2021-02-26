import { useRef } from 'react';
import styled from 'styled-components';
import { Location } from '@styled-icons/ionicons-solid';

const Bar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
  padding: 5px 20px;
  background: ${({ theme }) => theme.colors.tilesBackground};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow};

  ${({ theme }) => theme.media.tablet} {
    padding: 10px 20px;
  }

  ${({ theme }) => theme.media.hd} {
    margin-top: 60px;
    padding: 20px;
  }
`;

const CityNameWrapper = styled.div`
  display: flex;
  min-width: 300px;

  ${({ theme }) => theme.media.tablet} {
    margin-right: 20px;
  }
`;

const Icon = styled(Location)`
  color: ${({ theme }) => theme.colors.primary};
  height: 40px;

  ${({ theme }) => theme.media.tablet} {
    height: 50px;
  }

  ${({ theme }) => theme.media.hd} {
    height: 70px;
  }
`;

const CityName = styled.p`
  align-self: flex-end;
  padding-right: 5px;
  font-size: 2rem;
  font-weight: 700;

  ${({ theme }) => theme.media.hd} {
    font-size: 3rem;
  }
`;

const CountryName = styled.p`
  padding-top: 10px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.media.hd} {
    font-size: 1.5rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
  padding: 5px 0;
  height: 40px;

  ${({ theme }) => theme.media.tablet} {
    height: 50px;
  }

  ${({ theme }) => theme.media.desktop} {
    height: 55px;
    margin-left: 20px;
  }

  ${({ theme }) => theme.media.hd} {
    height: 60px;
  }
`;

const Input = styled.input`
  flex-grow: 1;
  height: 100%;
  max-width: 800px;
  padding-left: 20px;
  font-size: 1rem;
  font-weight: 700;
  border: none;
  border-radius: 15px 0 0 15px;
  background-color: ${({ theme }) => theme.colors.secondary};
  outline: none;

  ${({ theme }) => theme.media.desktop} {
    font-size: 1.4rem;
  }
`;

const Button = styled.button`
  height: 100%;
  width: 80px;
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  border: none;
  color: white;
  border-radius: 0 15px 15px 0;
  cursor: pointer;
  outline: none;

  ${({ theme }) => theme.media.desktop} {
    width: 120px;
    font-size: 1.4rem;
  }
`;

interface IProps {
  setCityName: (name: string | null) => void;
  city: string;
  country: string;
}

const SearchBar: React.FC<IProps> = ({ setCityName, city, country }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickHandler = () => {
    if (inputRef?.current) {
      setCityName(inputRef.current.value.toLowerCase().trim());
      inputRef.current.value = '';
    }
  };

  return (
    <Bar>
      <CityNameWrapper>
        <Icon />
        <CityName>{city}</CityName>
        <CountryName>/ {country}</CountryName>
      </CityNameWrapper>
      <InputWrapper>
        <Input type="text" placeholder="search location..." size={10} ref={inputRef} />
        <Button onClick={onClickHandler}>search</Button>
      </InputWrapper>
    </Bar>
  );
};

export default SearchBar;
