import styled from "styled-components";
import { Details } from "./Details";
import { Stats } from "./Stats";
import { Weaknesses } from "./Weaknesses";

const StyledInfo = styled.div`
  padding: 0 1rem 1rem 1rem;
`;

export const Info = ({ pokemon, weaknesses }) => (
  <StyledInfo>
    <Details pokemon={pokemon} />
    <Weaknesses weaknesses={weaknesses} />
    <Stats stats={pokemon.stats} />
  </StyledInfo>
);
