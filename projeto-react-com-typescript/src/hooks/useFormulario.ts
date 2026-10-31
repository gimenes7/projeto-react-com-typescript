import { useState } from 'react';
import type { ChangeEvent } from 'react';

// Hook genérico para formulários simples (campos de primeiro nível)
export const useFormulario = <T extends object>(
  inicial: T,
): [T, (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void, (novo: T) => void] => {
  const [valores, setValores] = useState<T>(inicial);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target;
    setValores((atual) => ({ ...atual, [name]: value }));
  };

  return [valores, handleChange, setValores];
};
