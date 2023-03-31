import styled from "styled-components";

export const StyledHeaderControls = styled.div`
display: flex;
align-items: center;
gap: 25px;

form{
    display: flex;
    align-items: center;
    background-color: var(--color-red2);
    height: 40px;
    padding: 0 15px;
    transition: 4s;

    :has(input:focus){
        outline: 1px solid var(--color-white);
    }

    input{
        width: 100%;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1rem;

        ::placeholder{
            color: rgba(255,255,255, .5);
        }
    }
    input, button{
        color: var(--color-white);
    }
    button{
        background: transparent;
        border: none
    }
}

.favoriteButton{
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Roboto', sans-serif;
    font-size: 1rem;

    gap: 5px;
    color: var(--color-white);
    border: none;
    background: transparent;
}
`