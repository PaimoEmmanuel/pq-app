import { createGlobalStyle } from 'styled-components'
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

    @import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
`