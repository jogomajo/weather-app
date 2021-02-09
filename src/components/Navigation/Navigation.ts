import styled from 'styled-components';

const Header = styled.header`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.fontPrimary};
`;

export default Header;
