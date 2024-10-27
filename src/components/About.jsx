import { useState } from "react";
import styled, { keyframes } from "styled-components";
import HeroImg from "../Images/about.png"; 

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-margin-top: 80px;
  align-items: center;
  background-color: ${({ theme }) => theme.bg_primary};
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  gap: 10px;
  padding: 80px 20px;

  @media (max-width: 960px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin-top: 12px;
    margin-bottom: 20px;
  }
`;

const Img = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 20px;
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  object-fit: cover;
  padding: 0.5em;

  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 640px) {
    max-width: 250px;
  }
`;

// New Styled Component for Scrollable Description
const ScrollableDescription = styled.div`
  max-height: 200px;
  overflow-y: auto;
  padding: 10px;
  background-color: ${({ theme }) => theme.bg_secondary};
  border-radius: 10px;
  margin-bottom: 20px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -40px;
  justify-content: center;
  align-items: flex-start;
  padding: 0px 20px 10px 100px;
  max-width: 800px;
  color: ${({ theme }) => theme.text_primary};
  flex: 0 0 auto;

  @media (max-width: 960px) {
    align-items: flex-start;
    padding: 60px 20px 140px 20px; /* Adjusted bottom padding for more space in responsive mode */
  }
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 16px;
  text-align: left;

  @media (max-width: 640px) { 
  font-size: 12px;
}
`;

// Styled component for the certifications layout
const TwoColumnList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2px;
  padding: 0;
  list-style: none;

  li {
    margin-bottom: 6px;
    position: relative;

    // Updated dot pointer style
    &:before {
      content: '•'; // Dot character
      position: absolute;
      left: -15px; // Adjust position of the dot
      top: -2.5px; // Move the dot slightly upwards
      color: white; // Change dot color to white
      font-size: 20px; // Adjust size as needed
      font-weight: normal; // Reduce dot boldness
    }
  }

  @media (max-width: 640px) { 
    font-size: 10px;
    // gap: 3px;
    // padding-left: 10px;
    column-gap: 24px;

    li {
      &:before {
        left: -15px; 
        top: -5.2px; 
      }
    }
  }
`;

const StyledTabButton = styled.button`
  font-size: 16px;
  font-weight: ${({ active }) => (active ? "600" : "normal")};
  color: ${({ active, theme }) => (active ? theme.primary : theme.text_primary)};
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  margin: 0 4px;
  border-bottom: ${({ active, theme }) => (active ? `2px solid ${theme.primary}` : "none")};

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 960px) {
    text-align: center;
    font-size: 13px;
  }
`;

// Animation for tab content
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TabContent = styled.div`
  width: 100%;
  background-color: transparent;
  font-size: 15px;
  padding: 20px;
  border-radius: 16px;
  margin-top: 0px;
  margin-bottom: -50px;
  animation: ${fadeIn} 0.3s ease-in-out;
  height: 300px;
  overflow-y: auto;
  max-height: 300px;

  @media (max-width: 960px) {
    height: 250px;
  }

  @media (max-width: 768px) {
    height: 200px;
    
  }

  @media (max-width: 640px) {
    height: 180px;
    font-size: 10px;
  }

  @media (max-width: 410px) {
    min-height: 240px;
  }

`;

const TAB_DATA = [
  {
    title: "Certifications",
    id: "skills",
    content: (
      <TwoColumnList>
        <li>Google Cyber Security</li>
        <li>Google AI Essentials</li>
        <li>JAVA Programming</li>
        <li>PowerBI</li>
        <li>SQL Beginner</li>
        <li>HTML, CSS, JavaScript</li>
        <li>C++ Programming</li>
        <li>MongoDB</li>
        <li>System Design Through Verilog</li>
        <li>Network Essentials</li>
        <li>Digital Image Processing</li>
      </TwoColumnList>
    ),
  },
  {
    title: "Achievements",
    id: "education",
    content: (
      <ul>
        <li style={{ marginBottom: '2.5px' }}>L&T TECHgium - Semi-finalist(2024)</li>
        <li style={{ marginBottom: '2.5px' }}>Springer ICE TEAS - Paper Publication(2024)</li>
        <li style={{ marginBottom: '2.5px' }}>The Inventors Challenge - Semi-finalist(2023)</li>
        <li style={{ marginBottom: '2.5px' }}>ACCS India - Finalist(2023)</li>
        <li style={{ marginBottom: '2.5px' }}>Smart India Hackathon</li>
      </ul>
    ),
  }
];

const About = () => {
  const [tab, setTab] = useState("skills");

  return (
    <Container id="about">
      <Title>About Me</Title>
      <Wrapper>
        {/* Image Section */}
        <Img src={HeroImg} alt="About Me Image" />

        {/* Text and Tabs Section */}
        <TextContainer>
          {/* Scrollable Description */}
          <ScrollableDescription>
            <Description>
              Hello! I&apos;m Prathishkumar T, a passionate Electronics and Communication Engineering student with a keen interest in UI and graphics design, front-end development, and cybersecurity.
            </Description>
            <Description>
              I thrive on creating visually appealing and user-friendly interfaces that enhance user experiences. With experience in HTML, CSS, and JavaScript, I love transforming ideas into functional web applications. I enjoy the challenge of balancing aesthetics with functionality, ensuring that every project I undertake is not only beautiful but also intuitive and secure.
            </Description>
            <Description>
              I am also deeply interested in cybersecurity, constantly exploring ways to protect systems and data from potential threats. I believe in continuous learning and strive to stay updated with the latest trends and technologies in this ever-evolving field.
            </Description>
          </ScrollableDescription>

          {/* Tabs for Skills and Achievements */}
          <div>
            {TAB_DATA.map((tabData) => (
              <StyledTabButton
                key={tabData.id}
                active={tab === tabData.id}
                onClick={() => setTab(tabData.id)}
              >
                {tabData.title}
              </StyledTabButton>
            ))}
          </div>

          {/* Tab Content */}
          <TabContent>
            {TAB_DATA.find((item) => item.id === tab).content}
          </TabContent>
        </TextContainer>
      </Wrapper>
    </Container>
  );
};

export default About;
