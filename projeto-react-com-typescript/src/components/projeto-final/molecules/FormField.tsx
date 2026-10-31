import type { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

interface FormFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  step?: string;
  multiline?: boolean;
  required?: boolean;
}

const FormField = ({
  label,
  name,
  value,
  onChange,
  type = 'text',
  placeholder,
  step,
  multiline = false,
  required = false,
}: FormFieldProps) => (
  <div>
    <Label htmlFor={name}>{label}:</Label>
    {multiline ? (
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={3}
        style={{
          width: '100%',
          padding: '8px',
          marginTop: '4px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          boxSizing: 'border-box',
        }}
      />
    ) : (
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        step={step}
        required={required}
      />
    )}
  </div>
);

export default FormField;
