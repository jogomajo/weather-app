import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Navigation/Navigation';
import SearchBar from './components/SearchBar/SearchBar';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';

import theme from './utils/theme';

const GlobalStyles = createGlobalStyle`
  body { 
    background: ${({ theme }) => theme.colors.background};
  }
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
    box-sizing: border-box;
  }
  `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  height: 100vh;
  color: ${({ theme }) => theme.colors.fontPrimary};

  ${({ theme }) => theme.media.tablet} {
    padding: 20px 30px;
  }

  /* ${({ theme }) => theme.media.desktop} {
    padding: 20px 150px;
  } */
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header>Weather</Header>
        <SearchBar />
        <WeatherDetails />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
