const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;
//  align-items: center;
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;  
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;
// align-items: center;, justify-content: flex-start;
const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  cursor: pointer;
  text-decoration: none;
  
  @media screen and (min-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;
//padding: 0 6px;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  padding: 0 6px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
// &.active {
//     border-bottom: 2px solid ${({ theme }) => theme.primary};
// }
const NavLink = styled.a`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;
//@media screen and (min-width: 640px)
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 100%;
  padding: 0 6px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
//text-decoration: none;, font-size: 1rem;,  transition: all 0.2s ease-in-out;
const GithubButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
  @media screen and (min-width: 640px) {
    font-size: 0.8rem;
  }
`;
