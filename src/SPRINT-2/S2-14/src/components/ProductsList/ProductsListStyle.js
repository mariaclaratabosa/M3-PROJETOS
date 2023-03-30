import styled from "styled-components";

export const StyledList = styled.ul`
    display: flex;
    overflow-y: auto;
    gap: 1rem;
    margin: 1rem;
    @media(min-width: 1000px){
        flex-wrap: wrap;
        width: 70%;
    }
`