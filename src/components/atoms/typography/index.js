import styled from "styled-components";
import { getColor } from "../../../utils/color";
import { Link } from "react-router-dom";

export const NavLink = styled(Link)`
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.8rem;
    letter-spacing: 0.2px;
    margin-left: 3.2rem;
    color: ${getColor("defaultBlue")};
`