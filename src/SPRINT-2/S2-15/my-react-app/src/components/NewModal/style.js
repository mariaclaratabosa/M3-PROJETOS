import styled from "styled-components";

export const StyledNewModalBox = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;
    justify-content: center;

    .modal{
        position: relative;
        width: 100%;
        max-width: 700px;
        background: var(--color-white);
        padding: 30px;
        overflow: auto;
        max-height: 70vh;

        .contentBox{
            margin-top: 50px;
        }

        .closeButton{
            position: absolute;
            top: 20px;
            right: 20px;
            opacity: .5;
            transition: .4s;
            border: none;
            background: none;

            :hover{
                opacity: 1;
            }
        }

        p{
            margin-top: 40px;
        }
    }

    @media (min-width: 800px){
        .modal{
            padding: 50px;

            .contentBox{
                margin-top: 80px;
            }
        }
    }
`
