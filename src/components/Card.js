import styled from "styled-components";
import { Header } from "./Header";
import { Info } from "./Info";
import { Screen } from "./Screen";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { usePokemon } from "../hooks/usePokemon";
import bgBody from "../assets/bg-body.jpg";

const StyledCard = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${bgBody});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  width: 365px;
  height: 620px;
  border: 15px solid #feec80;
  border-radius: 15px;
  position: relative;
`;

const StyledButton = styled.div`
  position: absolute;
  display: flex;
  top: 50%;
  transform: translate(-50%);
  z-index: 100;
  background-color: #feec80;
  border-radius: 100%;
  font-size: 35px;
  color: black;
  cursor: pointer;
`;

export const Card = () => {
  const [currentId, isLoading, pokemon, weaknesses, getPokemon] = usePokemon();

  return (
    <StyledCard>
      {isLoading ? (
        <></>
      ) : (
        <>
          <Header pokemon={pokemon} />

          <Screen img={pokemon.sprites.other.home.front_default} />

          <Info pokemon={pokemon} weaknesses={weaknesses} />

          <StyledButton style={{ left: -40 }}>
            <AiFillCaretLeft
              onClick={() =>
                getPokemon(currentId > 1 ? currentId - 1 : currentId + 149)
              }
            />
          </StyledButton>

          <StyledButton style={{ right: -75 }}>
            <AiFillCaretRight
              onClick={() =>
                getPokemon(currentId > 149 ? currentId -149 : currentId + 1)
              }
            />
          </StyledButton>
        </>
      )}
    </StyledCard>
  );
};
