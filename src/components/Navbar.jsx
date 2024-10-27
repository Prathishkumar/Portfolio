import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../data/Constants";

export const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  &:hover {
    background-color: ${({ theme }) => theme.card_dark};
    transition: background-color 0.3s ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  max-width: 1200px;
  width: 100%;
  padding: 0 24px;
  margin: 0 auto;
`;

export const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  align-items: center;

  @media screen and (max-width: 768px) {
    a {
      margin-top: -15px;
    }
  }

  @media screen and (max-width: 640px) {
    padding: 0 0px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

export const NavItems = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.white};
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary}; /* Change to your desired hover color */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  width: 80%;
  height: 80%;
  padding: 0 6px;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

export const GithubButton = styled.a`
  background-color: transparent;
  color: ${({ theme }) => theme.primary};
  border: 1.8px solid ${({ theme }) => theme.primary};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  height: 70%;
  text-decoration: none;

  :hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  @media screen and (max-width: 790px) {
    font-size: 0.8rem;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px; /* Reduced gap */
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ Open }) => (Open ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ Open }) => (Open ? "100%" : "0")};
  z-index: ${({ Open }) => (Open ? "1000" : "-1000")};
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
  text-decoration: none;
  padding: 8px 12px; /* Reduced padding for smaller touch area */
  border-radius: 5px; /* Optional: for visual effect */
  font-size: 14px; /* Reduced text size for mobile */

  :hover {
    color: ${({ theme }) => theme.primary}; /* Text color on hover */
    background-color: rgba(255, 255, 255, 0.1); /* Background color on hover */
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const Navbar = () => {
  const [Open, setOpen] = React.useState(false);

  // Close mobile menu on resize if it's open
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setOpen(false); // Close mobile menu if resized to desktop view
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <a style={{ display: "flex", alignItems: "center", color: "white", cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>

        <MobileIcon>
          <FaBars
            onClick={() => {
              setOpen(!Open);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GithubButton href={Bio.email} target="_blank">Get In Touch</GithubButton>
        </ButtonContainer>
        {Open && (
          <MobileMenu Open={Open}>
            <MobileLink href="#about" onClick={() => { setOpen(false) }}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => { setOpen(false) }}>Skills</MobileLink>
            <MobileLink href="#experience" onClick={() => { setOpen(false) }}>Experience</MobileLink>
            <MobileLink href="#projects" onClick={() => { setOpen(false) }}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => { setOpen(false) }}>Education</MobileLink>
          </MobileMenu>
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
