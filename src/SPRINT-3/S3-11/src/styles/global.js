import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;
        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343B41;
        --grey-1: #868E96;
        --grey-0: #F8F9FA;
        --sucess: #3FE864;
        --negative: #E83F5B;
    }
    body{
        background: var(--grey-4);
        font-family: 'Inter', sans-serif;
    }
    input,button, a, input::placeholder{
        font-family: 'Inter', sans-serif;
    }
`