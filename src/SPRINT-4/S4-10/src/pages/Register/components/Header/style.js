import styled from "styled-components"

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 2rem;
    margin-bottom: 2rem;
    img{
        width: 6.25rem;
    }
a{
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;
    background: var(--grey-3);
    border-radius: 4px;
    border: 1px solid var(--grey-3);
    text-decoration: none;
    color: var(--grey-0);
    font-size: 0.7rem;
    }
@media(min-width: 1000px){
    width: 23.125rem;
    img{
        width: 9rem;
    }
}
`