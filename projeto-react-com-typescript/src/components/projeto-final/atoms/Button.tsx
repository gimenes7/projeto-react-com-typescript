import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variante = 'primario' | 'sucesso' | 'perigo' | 'neutro';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: Variante;
  children: ReactNode;
}

const cores: Record<Variante, string> = {
  primario: '#0073e6',
  sucesso: '#16a34a',
  perigo: '#dc2626',
  neutro: '#6b7280',
};

const Button = ({ variante = 'primario', children, style, ...rest }: ButtonProps) => (
  <button
    {...rest}
    style={{
      padding: '8px 14px',
      backgroundColor: cores[variante],
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      ...style,
    }}
  >
    {children}
  </button>
);

export default Button;
