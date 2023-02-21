import styled from "styled-components";
import { Capitalize } from "../utils/Capitalize";
import { ColorType } from "../utils/ColorType";
import { StyledType } from "./Header";

const StyledWeaknesses = styled.div`
  margin-bottom: 20px;
  padding: 5px 15px;
`;

const StyledTitle = styled.p`
  margin-bottom: 10px;
`;

export const Weaknesses = ({ weaknesses }) => (
  <StyledWeaknesses>
    <StyledTitle>
      <b>Weaknesses: </b>
    </StyledTitle>
    {weaknesses.map((item, index) => (
      <StyledType key={index} style={{ backgroundColor: ColorType(item) }}>
        {Capitalize(item)}
      </StyledType>
    ))}
  </StyledWeaknesses>
);
