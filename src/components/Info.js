import styled from "styled-components"
import { Details } from "./Details";

const StyledInfo = styled.div`

`;

export const Info = ({pokemon}) => (
    <StyledInfo>
        <Details pokemon={pokemon}/>
        <b>Types</b>
        { pokemon.types.map((item, index) =>
            <div key={index}>
                <label>{item.type.name}</label>
            </div> 
        )}
    </StyledInfo>
)