import styled from "styled-components"

export const StyledItem = styled.li`
        display: flex;
        flex-direction: column;
        border: 2px solid #00cc99;
        border-radius: 2rem;
        width: 15rem;
        gap: 1rem;
        align-items: center;

    h2{
        font-size: 1.2rem;
        background-color: transparent;
        color: #e6fff9;
    }
    img{
    width: 10rem;
    height: auto;
    }
    span{
        font-size: 1rem;
        font-weight: 500;
        color: #e6fff9;
        background-color: transparent;
    }
    :hover{
        background-color: #00cc99;
        cursor: pointer;
    }
`