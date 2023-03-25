import styled from "styled-components";
import { Avatar } from "./Avatar";
import { Capitalize } from "../utils/Capitalize";
import { ColorType } from "../utils/ColorType";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch, useSelector } from "react-redux";
import * as favoriteActions from "../redux/actions/favoriteActions";

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

const StyledFavoriteButton = styled.button`
  cursor: pointer;
  border: none;
  width: 50px;
  border-radius: 100%;
`;

export function Header({ pokemon }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);

  let exist = favorites.some((favorite) => favorite.id === pokemon.id);

  function handleAdd(pokemon) {
    if (exist) return;
    dispatch(favoriteActions.addFavorite(pokemon));
  }

  function handleDelete(pokemon) {
    dispatch(favoriteActions.deleteFavorite(pokemon));
  }

  return (
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

      {!exist ? (
        <StyledFavoriteButton onClick={() => handleAdd(pokemon)}>
          <StarOutlineIcon  />
        </StyledFavoriteButton>
      ) : (
        <StyledFavoriteButton style={{backgroundColor: 'yellow'}} onClick={() => handleDelete(pokemon)}>
          <StarIcon />
        </StyledFavoriteButton>
      )}
    </StyledHead>
  );
}
