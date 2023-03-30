import styled from "styled-components";

export const StyledForm = styled.div`
    border: 2px solid var(--grey-20);
    padding: 0.6rem;
    background-color:  var(--white-default);
    font-size: 0.7rem;
    justify-content: space-between;
    border-radius: var(--radius-default);

.formInput{
    border: none;
    outline: none;
}

.formInput::placeholder{
    color: var(--grey-20);
}

.formButton{
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: var(--radius-default);
    padding: 0.5rem;
    color: var(--white-default);
    cursor: pointer;
}
@media(min-width: 1000px){
    width: 20rem;
}
form{
    justify-content: space-between;
    display: flex;
}
`