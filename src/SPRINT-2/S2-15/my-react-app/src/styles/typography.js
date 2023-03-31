import styled, { css } from "styled-components";

export const titleStyles = css`
	font-family: "Roboto", sans-serif;
	font-weight: 700;
	line-height: 1.4;
	color: var(--color-black);
	
	${({ fontSize }) => {
        switch (fontSize) {
            case "one":
                return css`
	            font-size: 1.9rem;
	            `;
            case "two":
                return css`
	            font-size: 1.5rem;
	            `;
            case "three":
                return css`
	            font-size: 1.35rem;
	            `;
            case "four":
                return css`
	            font-size: 1rem;
	            font-weight: 600;
	            `;
        }
}}
`;

export const StyledTitleOne = styled.h1`
	    ${titleStyles};
	`

export const StyledTitleTwo = styled.h2`
	    ${titleStyles};
	`

export const StyledTitleThree = styled.h3`
	    ${titleStyles};
	`

export const StyledTitleFour = styled.h4`
	    ${titleStyles};
	`

export const StyledLabel = styled.span`
	    font-family: 'Roboto', sans-serif;
	    font-weight: 600;
	    font-size: 1rem;
	    color: var(--color-red1);
	    text-transform: capitalize;
	`
export const StyledParagraph = styled.p`
	    font-family: 'Roboto', sans-serif;
	    font-weight: 400;
	    font-size: 1rem;
	    line-height: 1.5;
	   
`
