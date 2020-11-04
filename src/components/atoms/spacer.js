import styled from "styled-components";

export const VerticalSpacer = styled.div`
    height: ${props => props.size }
`

export const HorizontalSpacer = styled.div`
    display: inline;
    width: ${props => props.size };
`