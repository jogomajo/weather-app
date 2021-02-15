import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Navigation/Navigation';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

import theme from './utils/theme';

const GlobalStyles = createGlobalStyle`
  body { 
    height: 100vh;
    background: ${({ theme }) => theme.colors.background};
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
    box-sizing: border-box;
    user-select: none;
  }
  `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;

  ${({ theme }) => theme.media.tablet} {
    padding: 20px 30px;
  }

  ${({ theme }) => theme.media.hd} {
    padding: 20px 150px;
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header>Weather App</Header>
        <SearchBar />
        <WeatherDetails />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
