import styled from "styled-components";

export const StyledContent = styled.div`
    .userContent{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-bottom: 2px solid var(--grey-3);
        padding: 1rem 1rem 1.5rem 1rem;
    
        p{
            color: var(--grey-0);
            font-size: 1.125rem;
        }
        span{
            color: var(--grey-1);
            font-size: 0.75rem;
        }
    }
    .mainContent{
        display: flex;
        flex-direction: column;
        margin: 1rem;
        gap: 1rem;
        margin-top: 2rem;
        p{
            color: var(--grey-0);
            font-size: 0.8rem;
        }
        span{
            color: var(--grey-0);
            font-size: 0.7rem;
        }
    }
    @media(min-width: 1000px){
        .userContent{
            flex-direction: row;
            align-items: center;
            justify-content: space-around;
            padding: 4rem 2rem 5rem 2rem;
        }
        .mainContent{
            padding-left: 20rem;
            padding-top: 3rem;
            justify-content:center;
            p{
                font-size: 1.125rem;
                margin-bottom: 1rem;
            }
            span{
                font-size: 1rem;
            }
        }
    }
`