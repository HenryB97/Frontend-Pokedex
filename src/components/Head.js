import styled from "styled-components"

const StyledHead = styled.div`

`;

export const Head = ({name}) => (
    <StyledHead>
        <p>
        <label>{name}</label>
        </p>
    </StyledHead>
)