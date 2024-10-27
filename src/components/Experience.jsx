// import React from 'react';
import styled from 'styled-components'; // Make sure to import styled
import ExperienceCard from '../components/ExperienceCard';
import { experiences } from '../data/Constants';

// Styled Components
const ExperienceContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 40px 0px 80px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 80px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Description = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ExperienceList = styled.div`
    width: 100%; // Make it full width
    max-width: 1000px; // Optional: limit max width for larger screens
    display: flex;
    flex-direction: column; // Stack items vertically
    align-items: center; // Center align items
    justify-content: flex-start; // Align to start
    gap: 12px; // Space between cards
`;

const Experience = () => {
    return (
        <ExperienceContainer id="experience">
            <Wrapper>
                <Title>Experience</Title>
                <Description>
                     Here is my Internship details
                </Description>
                <ExperienceList>
                    {experiences.map((experience) => (
                        <ExperienceCard key={experience.id} experience={experience} /> // Assuming experience has a unique id
                    ))}
                </ExperienceList>
            </Wrapper>
        </ExperienceContainer>
    );
};

export default Experience;
