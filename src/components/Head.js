import styled from "styled-components"
import { Avatar } from "./Avatar";

const StyledHead = styled.div`

`;

export const Head = ({pokemon}) => (
    <StyledHead>
        <p>
            <Avatar img={pokemon.sprites.front_default}/>
            <label>{pokemon.name}</label>
        </p>
    </StyledHead>
)