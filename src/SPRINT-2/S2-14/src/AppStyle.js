import styled from "styled-components";

export const StyledContainer = styled.div`
    .mainContainer{
        display: flex;
        flex-direction: column;
    }
    .searchingFor{
        margin-top: 1rem;
        font-size: 1.6875rem;
        font-weight: 700;
        color: var(--grey-100);
        margin-left: 1rem;
    }
    .searchedName{
        color: var(--grey-50);
    }

    @media(min-width: 1000px){
        .mainContainer{
            flex-direction: row;
            padding-left: 7rem;
            padding-right: 7rem;
            padding-top: 1rem;
            justify-content: center;
        }
        .searchingFor{
            margin-left: 8rem;
        }
    }

`