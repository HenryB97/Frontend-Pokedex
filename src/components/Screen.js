import styled from "styled-components"

const StyledScreen= styled.div`
    background-color: #c5846f;
`;

const StyledImg = styled.img`
    width: 150px;
    height: auto;
`;

export const Screen = ({img}) => (
    <StyledScreen>
        <StyledImg src={img} className="App-logo" alt="logo" />
    </StyledScreen>
)