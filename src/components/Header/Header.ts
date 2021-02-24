import styled from 'styled-components';

const Header = styled.header`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  font-family: 'Righteous';
  color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.media.hd} {
    font-size: 4rem;
  }
`;

export default Header;
