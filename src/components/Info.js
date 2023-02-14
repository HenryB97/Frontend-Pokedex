import styled from "styled-components"

const StyledInfo = styled.div`

`;

export const Info = ({pokemon}) => (
    <StyledInfo>
        <b>Weight</b>
        <p>{pokemon.weight}</p>
        <b>Abilities</b>
        { pokemon.abilities.map((item, index) =>
            <div key={index}>
                <label>{item.ability.name}</label>
            </div> 
        )}
        <b>Types</b>
        { pokemon.types.map((item, index) =>
            <div key={index}>
                <label>{item.type.name}</label>
            </div> 
        )}
    </StyledInfo>
)