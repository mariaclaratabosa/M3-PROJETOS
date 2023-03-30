import styled from "styled-components";

export const StyledCartProduct = styled.div`
width: 97%;
display: flex;
justify-content: space-between;
margin-bottom: 1rem;

.cartProductAndContentDiv{
    display: flex;
    gap: 0.5rem;
}

.cartProductImageDiv{
    background-color: var(--grey-20);
    border-radius: var(--radius-default);
}

.cartProductImageDiv img{
    width: 4.375rem;
}

.cartProductNameCategoryAndCount{
    display: flex;
    gap: 1rem;
}

.cartProductNameAndCategory{
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 0.5rem;
}

.cartProductName{
    color: var(--grey-100);
    font-weight: 600;
    font-size: 0.8rem;
}

.cartProductCategory{
    color: var(--grey-50);
    font-size: 0.6rem;
}

.cartProductCount{
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--grey-50);
    font-size: 0.8rem;
}

.cartProductButton{
    color: var(--grey-40);
    border: none;
    background-color: transparent;
    height: 50%;
    margin-top: 0.5rem;
    cursor: pointer;
}
.cartProductButton:hover{
    color: var(--grey-100);
    text-decoration-line: underline;
}
`