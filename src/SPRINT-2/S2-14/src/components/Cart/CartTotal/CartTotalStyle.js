import styled from "styled-components";

export const StyledCartTotal = styled.div`
.cartTotal{
    display: flex;
    width: 97%;
    justify-content: space-between;
}

.cartTotalTitle, .cartTotalPrice{
    font-weight: 600;
    font-size: 0.875rem;
}

.cartTotalTitle{
    color: var(--grey-100);
}

.cartTotalPrice{
    color: var(--grey-50);
}
`