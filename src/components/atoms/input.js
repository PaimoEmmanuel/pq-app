import styled from "styled-components";
import { getColor } from "../../utils/color";

export const Input = styled.input`
    color: ${getColor("lightBlack")};
    background-color: ${getColor("lightestGray")};
    font-family: Mulish;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.2px;
    padding-left: 1rem;
    height: 4.2rem;
    width: 37.7rem;
    border: none;

    &:placeholder {
        color: ${getColor("lightGray")};
    }

    &:focus {
        outline: none;
    }
`;