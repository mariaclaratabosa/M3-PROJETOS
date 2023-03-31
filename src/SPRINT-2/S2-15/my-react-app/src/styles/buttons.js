import styled from "styled-components";

export const StyledButton = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;

padding: 0 25px;
height: 26px;

border-radius: 255px;
border: 1px solid var(--color-red1);

font-family: 'Roboto', sans-serif;
font-size: .875rem;
font-weight: 400;
color: var(--color-red);
transition: .4s;

:hover{
    background-color: var(--color-red1);
    color: var(--color-white);
}
`