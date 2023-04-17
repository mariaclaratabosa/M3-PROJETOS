import styled from "styled-components"

export const StyledAddModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 19rem;
    height: auto;
    border-radius: 4px;
    background-color: var(--grey-3);

    .addModalHeader{
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        background-color: var(--grey-2);
        p{
            color: var(--grey-0);
            font-size: 0.875rem;
        }
        button{
            background-color: transparent;
            border: none;
            color: var(--grey-1);
            font-size: 1rem;
            cursor: pointer;
        }
    }
    form{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        label{
            color: var(--grey-0);
            font-size: 0.75rem;
        }
        input, select{
            background-color: var(--grey-2);
            border: 1px solid var(--grey-0);
            border-radius: 4px;
            border: none;
            padding: 0.8rem;
            color: var(--grey-1);
            outline: none;
            ::placeholder{
                color: var(--grey-1);
            }
        }
        input{
            color: #FFFFFF;
        }
        .errorsMessage{
        color: var(--grey-1);
        font-size: 0.625rem;
        margin-bottom: 1rem;
        margin-top: 1rem;
        }
        button{
            background-color: var(--color-primary);
            border: none;
            border-radius: 4px;
            padding: 0.8rem;
            color: #FFFFFF;
            cursor: pointer;
            :hover{
                background-color: var(--color-primary-focus);
            }
        }
    }
`

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100vw;
    height: 100vh;
    background-color: rgba(18, 18, 20, 0.5);
    padding: 0 20px;
`