import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './components/Navigation/Navigation';

import theme from './utils/theme';

const GlobalStyles = createGlobalStyle`
  body { 
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
    background: ${({ theme }) => theme.colors.background};
  }
  
  *, *::before, *::after {
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
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <Header>Weather</Header>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
