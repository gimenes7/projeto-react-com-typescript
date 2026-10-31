import type { ReactNode } from 'react';

interface LabelProps {
  htmlFor: string;
  children: ReactNode;
}

const Label = ({ htmlFor, children }: LabelProps) => (
  <label htmlFor={htmlFor} style={{ fontWeight: 600 }}>
    {children}
  </label>
);

export default Label;
