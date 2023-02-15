import styled from "styled-components"

const StyledAvatar = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: white
`;

export const Avatar = ({img}) => (
    <StyledAvatar src={img}/>
)