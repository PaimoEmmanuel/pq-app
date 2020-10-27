import styled from "styled-components";

const Image = styled.img`
    border-radius: 50%;
`;
export const Builders = ({src}) => (
    <Image src={src} alt="" />
)