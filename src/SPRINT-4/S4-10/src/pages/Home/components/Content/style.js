import styled from "styled-components"

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
        margin-top: 1rem;
        div{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        p{
            color: var(--grey-0);
            font-size: 0.8rem;
        }
        button{
            background-color: var(--grey-3);
            border: transparent;
            border-radius: 4px;
            width: 25px;
            height: 25px;
            color: #FFFFFF;
        }
        ul{
            list-style: none;
            background-color: var(--grey-3);
            border-radius: 4px;
        }
        li{
            display: flex;
            justify-content: space-between;
            background-color: var(--grey-4);
            margin: 1rem;
            align-items: center;
            padding: 0.5rem;
            border-radius: 4px;
            .techTitle{
                font-size: 0.7rem;
                color: var(--grey-0);
                padding: 0.3rem;
            }
            .techStatus{
                font-size: 0.6rem;
                color: var(--grey-1);
            }
            :hover{
                background-color: var(--grey-2);
            }
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
            padding: 1rem 20rem 5rem 20rem;
            justify-content:center;
            p{
                font-size: 1.125rem;
                margin-bottom: 1rem;
            }
            li{
                padding: 0.5rem 1rem;
                .techTitle{
                    font-size: 0.875rem;
                    padding: 0.5rem;
                }
                .techStatus{
                    font-size: 0.75rem;
                }
            }
        }
    }
`