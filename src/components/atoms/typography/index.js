import styled from "styled-components";
import { getColor } from "../../../utils/color";
import { Link, NavLink } from "react-router-dom";

export const HeaderLink = styled(NavLink)`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.8rem;
    letter-spacing: 0.2px;
    margin-left: 3.2rem;
    color: ${getColor("lightBlack")};
    text-decoration: none;

    &:hover,
    &.active {
        color: ${getColor("defaultBlue")};
      }
`
export const HeadLine2 = styled.h2`
    font-size: 4.4rem;
    font-weight: 700;
    line-height: 5.6rem;
    letter-spacing: 0.2px;
    text-align: center;
    color: ${props => props.color ? getColor(props.color) : getColor("lightBlack")};
`

export const HeadLine3 = styled.h3`
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 4rem;
    letter-spacing: 0.1px;
    text-align: center;
    color: ${props => props.color ? getColor(props.color) : getColor("lightBlack")};
`

export const HeadLine6 = styled.h6`
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 2.4rem;
    letter-spacing: 0.1px;
    text-align: center;
    color: ${props => props.color ? getColor(props.color) : getColor("lightBlack")};
`

export const Body1 = styled.p`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.2rem;
    letter-spacing: 0.3px;
    text-align: center;
    color: ${props => props.color ? getColor(props.color) : getColor("lightBlack")};
`

export const Body2 = styled.p`
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2rem;
    letter-spacing: 0.2px;
    text-align: center;
    color: ${props => props.color ? getColor(props.color) : getColor("lightBlack")};
`
export const Body3 = styled.p`
    font-size: 1.6rem;
    font-style: italic;
    font-weight: 600;
    line-height: 2rem;
    letter-spacing: 0.2px;
    text-align: center;
    color: ${props => props.color ? getColor(props.color) : getColor("lightBlack")};
`

export const Button = styled(Link)`
    background-color: ${getColor("defaultBlue")};
    text-decoration: none;
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: center;
    letter-spacing: 0.3px;
    padding: 1.2rem 1.8rem;
    display: inline-block;
    color: ${getColor("white")};
`

export const Important = styled.span`
    color: red;
`;