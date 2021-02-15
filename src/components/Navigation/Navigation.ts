import styled from 'styled-components';

const Header = styled.header`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.media.hd} {
    font-size: 3rem;
  }
`;

export default Header;
