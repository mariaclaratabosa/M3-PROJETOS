import styled from "styled-components";

export const StyledEmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    gap: 1rem;

.emptyTitle{
    color: var(--grey-100);
    font-size: 18px;
    font-weight: 600;
}

.emptySpan{
    color: var(--grey-50);
    font-size: 0.875rem;
}
`