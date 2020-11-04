import styled from "styled-components";
import { getColor, getColorRGB } from "../../utils/color";

export const QuestionNumber = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.4rem;
    letter-spacing: 0.1px;
    text-align: center;
    border-radius: 50%;
    border: 2px solid ${getColor("defaultBlue")};
    background: ${props => props.status ? `rgba(${getColorRGB(props.status)}, 0.45)` : `none`};
    height: 4rem;
    width: 4rem;
`;