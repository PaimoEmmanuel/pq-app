import styled from "styled-components";
import Background from "../../assets/images/get-started-bg.jpg";


export const BgWrapper = styled.div`
    z-index: -1;
    position: absolute;
    height: 72rem;
    width: 100%;
    background-image: linear-gradient(180deg, rgba(60, 100, 177, 0.6) 0%, rgba(236, 239, 245, 0.5) 100%), url(${Background});
    background-size: cover;
    margin-bottom: -4rem;
`;