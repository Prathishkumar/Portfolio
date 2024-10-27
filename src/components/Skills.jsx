// import React from "react";
import styled, { keyframes } from "styled-components";
import { skills } from "../data/Constants";

// Floating animation
const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  scroll-margin-top: 220px;
  z-index: 1;
  align-items: center;
  margin-top: -25px; /* Adjust this negative margin */
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 0; /* Remove top margin */
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 0; /* Set to zero for smaller screens */
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 12px; /* Adjust this if necessary */

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px; /* Adjust this value to control spacing */
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const Skill = styled.div`
  background: transparent;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 18px 36px;

  flex: 1 1 30%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex: 1 1 45%;
    padding: 10px 36px;
  }

  @media (max-width: 500px) {
    flex: 1 1 100%;
    padding: 10px 16px;
  }
`;

// const SkillTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   margin-bottom: 20px;
//   text-align: center;
// `;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px;
  margin-bottom: 0px;
  max-width: 100%;
  width: 100%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.14) 0px 4px 24px;
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills.</Desc>
        <SkillsContainer>
          {skills.map((skill, skillIndex) => (
            <Skill key={skill.title}>
              <SkillList>
                {skill.skills.map((item, skillItemIndex) => (
                  <SkillItem key={item.name} delay={(skillIndex * skill.skills.length + skillItemIndex) * 0.8}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;




// import React from 'react';
// import styled from 'styled-components';
// import { skills } from '../data/Constants';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   position: relative;
//   z-index: 1;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1100px;
//   gap: 12px;

//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

// export const Title = styled.div`
//   font-size: 42px;
//   text-align: center;
//   font-weight: 600;
//   margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};

//   @media (max-width: 768px) {
//     margin-top: 12px;
//     font-size: 32px;
//   }
// `;

// export const Desc = styled.div`
//   font-size: 18px;
//   text-align: center;
//   max-width: 600px;
//   color: ${({ theme }) => theme.text_secondary};

//   @media (max-width: 768px) {
//     font-size: 16px;
//   }
// `;

// const SkillsContainer = styled.div`
//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 30px;
//   gap: 30px;
//   justify-content: center;
// `;

// const Skill = styled.div`
//   width: 100%;
//   max-width: 500px;
//   background: ${({ theme }) => theme.card};
//   border: 0.1px solid #854CE6;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 36px;

//   @media (max-width: 768px) {
//     max-width: 400px;
//     padding: 10px 36px;
//   }
//   @media (max-width: 500px) {
//     max-width: 330px;
//     padding: 10px 36px;
//   }
// `;

// const SkillTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   margin-bottom: 20px;
//   text-align: center;
// `;

// const SkillList = styled.div`
//   display: flex;
//   justify-content: center;
//   flex-wrap: wrap;
//   gap: 12px;
//   margin-bottom: 20px;
// `;

// const SkillItem = styled.div`
//   font-size: 16px;
//   font-weight: 400;
//   color: ${({ theme }) => theme.text_primary + 80};
//   border: 1px solid ${({ theme }) => theme.text_primary + 80};
//   border-radius: 12px;
//   padding: 12px 16px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   gap: 8px;

//   @media (max-width: 768px) {
//     font-size: 14px;
//     padding: 8px 12px;
//   }
//   @media (max-width: 500px) {
//     font-size: 14px;
//     padding: 6px 12px;
//   }
// `;

// const SkillImage = styled.img`
//   width: 24px;
//   height: 24px;
// `;

// const Separator = styled.div`
//   width: 100%;
//   height: 2px; /* Adjust thickness as needed */
//   background-color: ${({ theme }) => theme.text_primary}; /* Change color as needed */
//   margin: 20px 0; /* Adjust spacing as needed */
// `;

// const Skills = () => {
//   return (
//     <Container id="skills">
//       <Wrapper>
//         <Separator /> {/* Add the separator line here */}
//         <Title>Skills</Title>
//         <Desc>Here are some of my skills.</Desc>
//         <SkillsContainer>
//           {skills.map((skill) => (
//             <Skill key={skill.title}>
//               <SkillTitle>{skill.title}</SkillTitle>
//               <SkillList>
//                 {skill.skills.map((item) => (
//                   <SkillItem key={item.name}>
//                     <SkillImage src={item.image} alt={item.name} />
//                     {item.name}
//                   </SkillItem>
//                 ))}
//               </SkillList>
//             </Skill>
//           ))}
//         </SkillsContainer>
//       </Wrapper>
//     </Container>
//   );
// }

// export default Skills;