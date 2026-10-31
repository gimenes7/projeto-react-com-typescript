import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ style, ...rest }: InputProps) => (
  <input
    {...rest}
    style={{
      width: '100%',
      padding: '8px',
      marginTop: '4px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      boxSizing: 'border-box',
      ...style,
    }}
  />
);

export default Input;
