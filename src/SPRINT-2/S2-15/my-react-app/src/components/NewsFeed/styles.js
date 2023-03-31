import styled from "styled-components";

export const StyledNewsFeed = styled.div`
margin-top: 25px;

ul{
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 15px;
}

@media(min-width: 800px){
    ul{
        grid-template-columns: repeat(2, 1fr);
        li:first-child{
            grid-area: 1 / 1 / 2 / 3;
        }
    }
}

@media(min-width: 1200px){
    ul{
        grid-template-columns: repeat(3, 1fr);
    }
}
`