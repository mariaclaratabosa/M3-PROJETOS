import styled from "styled-components";

export const StyledFavoriteModal = styled.div`
position: fixed;
top: 0;
right: 0;

height: 100vh;

background: var(--color-white);
padding: 30px;
width: 100%;
max-width: 400px;

.modalGrid{
    position: relative;
    .closeButton{
        position: absolute;
        top: 0;
        right: 0;
        opacity: .5;
        transition: 4s;
        border: none;
        background: transparent;

        :hover{
            opacity: 1;
        }
    }
}
`