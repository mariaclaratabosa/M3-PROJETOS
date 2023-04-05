import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    border-bottom: 2px solid var(--grey-3);
    padding: 1rem 1rem 1.5rem 1rem;
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
        justify-content: space-around;
    }
    @media(min-width: 700px){
        img{
            width: 6.5625rem;
        }
    }
`