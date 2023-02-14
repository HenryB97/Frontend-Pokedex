import styled from "styled-components"

const StyledScreen= styled.div`
    background-color: #c5846f;
`;

export const Screen = ({img}) => (
    <StyledScreen>
        <img src={img} className="App-logo" alt="logo" />
    </StyledScreen>
)