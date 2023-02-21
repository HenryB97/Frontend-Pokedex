import styled from "styled-components";
import bgScreen from "../assets/bg-screen.jpg";

const StyledScreen = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bgScreen});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 150px;
`;

const StyledImg = styled.img`
  width: 150px;
  height: 140px;
  transition: 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Screen = ({ img }) => (
  <StyledScreen>
    <StyledImg src={img} alt="background" />
  </StyledScreen>
);
