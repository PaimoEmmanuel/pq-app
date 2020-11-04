import styled from "styled-components";
import { getColor } from "../../utils/color";

export const WhiteBg = styled.div`
    background-color: ${getColor("white")};
    border-radius: 12.15rem;
    padding: 2.4rem 8rem;
    width: ${props => props.width ? props.width : "fit-content"};
    margin: 0 auto;
`;