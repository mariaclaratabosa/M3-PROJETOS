import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
:root{
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-40: #BDBDBD;
    --grey-20: #E0E0E0;
    --grey-background: #F5F5F5;
    --white-default: #FFFFFF;
    --negative: #E60000;
    --warning: #FFCD07;
    --sucess: #168821;
    --radius-default: 8px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    }
`