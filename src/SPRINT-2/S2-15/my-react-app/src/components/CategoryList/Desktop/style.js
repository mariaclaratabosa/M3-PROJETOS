import styled, {css} from "styled-components"

export const StyledDesktopCategoryList = styled.ul`
display: flex;
gap: 40px;
`
export const StyledDesktopCategoryListitem = styled.li`
    button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 600;
        padding: 10px 0;
        border: none;
        border-bottom: 4px solid transparent;
        cursor: pointer;

        ${({active}) => {
            if(active){
                return css`
                border-color: var(--color-red1);
                `
            }
        }}
    }
`
