import styled from "styled-components";
import { Capitalize } from "../utils/Capitalize";

const StyledDetails = styled.div`
  background-color: rgb(0, 0, 0, 0.5);
  padding: 0.7rem 15px;
  border-radius: 10px;
  margin-top: 10px;
  text-align: center;
`;

export const Details = ({ pokemon }) => (
  <StyledDetails>
    <div style={{ marginBottom: 10 }}>
      <b>Weight: </b>
      <label>{pokemon.weight / 10} Kg. &nbsp; &nbsp;</label>
      <b>Height: </b>
      <label>{pokemon.height / 10} m</label>
    </div>

    <div>
      <b>Abilities: </b>
      {pokemon.abilities.map((item, index) => (
        <label key={index}>{Capitalize(item.ability.name)} </label>
      ))}
    </div>
  </StyledDetails>
);
