import styled from "styled-components"

export const StyledEditAndDeleteModal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 19rem;
    height: auto;
    border-radius: 4px;
    background-color: var(--grey-3);
    .modalHeader{
        display: flex;
        background-color: var(--grey-2);
        justify-content: space-between;
        padding: 0.8rem;
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
        gap: 1rem;
        padding: 0.8rem;
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
        }
        .modalButtons{
            display: flex;
            justify-content: space-between;
            gap: 1rem;
            button{
            border: none;
            border-radius: 4px;
            color: #FFFFFF;
            font-size: 0.8rem;
            padding: 0.8rem 1.6rem 0.8rem 1.6rem;
            cursor: pointer;
            }
            .updateButton{
            background-color: var(--color-primary);
            :disabled{
                background-color: var(--color-primary-negative);
                cursor: default;
            }
            :not(:disabled):hover{
                background-color: var(--color-primary-focus);
            }
        }
        .deleteButton{
            background-color: var(--grey-1);
            
        }
        }
    }
`