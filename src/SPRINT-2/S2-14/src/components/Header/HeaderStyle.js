import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #F5F5F5;

    .headerStyle{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;

    @media(min-width: 767px){
        flex-direction: row;
        justify-content: space-between;
    }

    @media(min-width: 1000px){
        margin-left: 7rem;
        margin-right: 7rem;
    }
    }

`