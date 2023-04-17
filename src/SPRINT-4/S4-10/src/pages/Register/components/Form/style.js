import styled from "styled-components"

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    background-color: var(--grey-3);
    border-radius: 3px;
    width: 100%;
    padding: 1rem;
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    color: var(--grey-0);
    .createAccount{
        display: flex;
        justify-content: center;
        font-weight: 600;
        margin-top: 2rem;
        font-size: 0.875rem;
    }
    span{
        display: flex;
        justify-content: center;
        color: var(--grey-1);
        font-size: 0.625rem;
        margin-bottom: 1rem;
        margin-top: 1rem
    }
    label{
        font-size: 0.625rem;
        margin-bottom: 0.7rem;
    }
    input, select{
        background: var(--grey-2);
        border: 1px solid var(--grey-0);
        border-radius: 3px;
        height: 2.5rem;
        margin-bottom: 0.7rem;
        padding-left: 0.5rem;
        color: var(--grey-0);
        :focus{
            background: var(--grey-2);
            outline: var(--grey-2)
        }
    }
    select{
        color: var(--grey-1);
    }
    .errorsMessage{
        font-size: 0.6rem;
        margin-bottom: 2rem;
    }
    .registerButton{
        background: var(--color-primary);
        border: 1px solid var(--color-primary);
        border-radius: 4px;
        height: 2.5rem;
        color: var(--grey-0);
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    @media(min-width: 1000px){
        width: 23.125rem;
    }
`