import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    background-color: var(--white-default);
    border: 2px solid var(--grey-20);
    width: 15.75rem;
    border-radius: 5px;

.productImage{
    background-color: var(--grey-background);
    display: flex;
    justify-content: center;
    height: 11rem;
    align-items: center;
}

.productContent{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    width: 18.75rem;
}

.productName{
    font-size: 1.125rem;
    color: var(--grey-100);
}

.productCategory{
    font-size: 0.75rem;
    color: var(--grey-50);
    font-weight: 400;
}

.productPrice{
    font-size: 0.875rem;
    color: var(--color-primary);
}

.productButton{
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    width: 30%;
    padding: 0.5rem;
    border-radius: var(--radius-default);
    color: var(--white-default);
    font-weight: 500;
    cursor: pointer;
}

.productButton:hover{
    background-color: var(--color-primary-50);
    border: 2px solid var(--color-primary-50);
}

@media(min-width: 1000px){
    width: 16.75rem;
}
`
