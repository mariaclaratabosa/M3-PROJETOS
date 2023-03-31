import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root{
    --color-white: #FFFFFF;
    --color-gray: #F1F1F1;
    --color-red1: #FF0000;
    --color-red2: #A00606;
    --color-black: #000000;
}
body{
    background: var(--color-gray)
}
`