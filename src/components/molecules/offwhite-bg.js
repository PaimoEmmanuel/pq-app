import styled from "styled-components";
import { getColor } from "../../utils/color";

export const OffWhiteBg = styled.div`
    position: fixed;
    z-index: -99;
    background-color: ${getColor("offWhite")};
    height: 100vh;
    width: 100%;
`;