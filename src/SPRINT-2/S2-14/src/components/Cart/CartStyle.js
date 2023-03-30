import styled from "styled-components";

export const StyledCart = styled.div`
    margin: 1rem;
    background-color: var(--grey-background);
    border-radius: 0px 0px 5px 5px;

.cartHeader{
    background-color: var(--color-primary);
    padding: 1rem;
    border-radius: 5px 5px 0px 0px;
}

.cartHeader p{
    color: var(--white-default);
    font-weight: 600;
    font-size: 1rem;
}

.cartItens{
    padding: 1rem;
}

.removeAllButton{
    background-color: var(--grey-20);
    width: 100%;
    padding: 0.8rem;
    border: 2px solid var(--grey-20);
    border-radius: var(--radius-default);
    cursor: pointer;
    color: var(--grey-50);
    margin-top: 1rem;
}

.removeAllButton:hover{
    background-color: var(--grey-50);
    color: var(--grey-20);
}

@media(min-width:1000px){
    width: 25%;
    height: fit-content;
}
`
