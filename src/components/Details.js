import styled from "styled-components"

const StyledDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const Details = ({pokemon}) => (
    <StyledDetails>
        <div>
            <b>Weight</b>
            <p>{pokemon.weight / 10} Kg.</p>
            <b>Height</b>
            <p>{pokemon.height / 10} m</p>
        </div>

        <div>
            <b>Abilities</b>
            { pokemon.abilities.map((item, index) =>
                <div key={index}>
                    <label>{item.ability.name}</label>
                </div> 
            )}
        </div>
    </StyledDetails>
)