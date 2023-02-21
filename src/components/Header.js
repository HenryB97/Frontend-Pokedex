import styled from "styled-components";
import { Avatar } from "./Avatar";
import { Capitalize } from "../utils/Capitalize";
import { ColorType } from "../utils/ColorType";

const StyledHead = styled.div`
  display: flex;
  padding: 0.8rem 1rem;
`;

export const StyledType = styled.label`
  padding: 4px 10px;
  border-radius: 5px;
  margin-right: 5px;
  font-size: 13px;
  font-weight: bold;
  color: black;
`;

export const Header = ({ pokemon }) => (
  <StyledHead>
    <Avatar img={pokemon.sprites.front_default} />

    <div style={{ marginLeft: 15 }}>
      <h3>{Capitalize(pokemon.name)}</h3>
      {pokemon.types.map((item, index) => (
        <StyledType
          key={index}
          style={{ backgroundColor: ColorType(item.type.name) }}
        >
          {Capitalize(item.type.name)}
        </StyledType>
      ))}
    </div>
  </StyledHead>
);
