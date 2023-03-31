import styled from "styled-components";

export const StyledHeader = styled.header`
background: var(--color-red1);

.flexBox{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

@media(min-width: 880px){
    padding: 5px 0;
    .flexBox{
        flex-direction: row;
        justify-content: space-between;
    }
}
`