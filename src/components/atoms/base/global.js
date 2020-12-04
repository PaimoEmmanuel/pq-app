import styled, { createGlobalStyle } from 'styled-components'
import { respond } from "./mixin";
export const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
        box-sizing: border-box;

        ${respond("big-desktop", `
            font-size: 75%;
        `)}

        ${respond("tab-land", `
            font-size: 56.25%;
        `)}

        ${respond("tab-port", `
            font-size: 50%;
        `)}

        ${respond("phone", `
            font-size: 40%;
        `)}
    }

    body {
        box-sizing: border-box;
        font-family: 'Mulish', sans-serif;
        overflow-x: hidden;
    }
`

export const MaxWidth = styled.div`
    width: 100%;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 6.3rem;
`