import { StyledInputContainer } from '../../../styles/form';
import { forwardRef, HTMLProps } from 'react';

type InputProps = {
  id: string;
  type: 'text' | 'password' | 'email';
  disabled?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ id, type, disabled, ...rest }: InputProps, ref) => (
  <div>
    <StyledInputContainer>
      <input type={type} id={id} placeholder='' disabled={disabled} ref={ref} {...rest} />
      <label htmlFor={id}>{id}</label>
    </StyledInputContainer>
  </div>
));

export default Input;
