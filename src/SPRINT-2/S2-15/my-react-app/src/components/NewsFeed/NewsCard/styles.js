import styled from "styled-components"

export const StyledNewsCard = styled.li`
position: relative;
background-color: var(--color-white);
border: 1px solid rgba(0,0,0,0.2);
padding: 25px 35px;

.favoriteButton{
    position: absolute;
    top: 20px;
    right: 20px;
    color: var(--color-red1);
    background: transparent;
    border: none;
}

.contentBox{
    margin-top: 100px;

    button{
        margin-top: 30px;
        color: var(--color-red1);
        font-size: 1rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        background: transparent;
        border: none;
    }
}
`