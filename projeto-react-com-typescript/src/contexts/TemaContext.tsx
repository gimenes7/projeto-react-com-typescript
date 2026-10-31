import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { Tema } from '../types/tema';

interface TemaContextValue {
  tema: Tema;
  alternarTema: () => void;
}

interface TemaProviderProps {
  children: ReactNode;
}

const TemaContext = createContext<TemaContextValue | undefined>(undefined);

const temaInicial = (): Tema =>
  localStorage.getItem('tema') === Tema.Escuro ? Tema.Escuro : Tema.Claro;

export const TemaProvider = ({ children }: TemaProviderProps) => {
  const [tema, setTema] = useState<Tema>(temaInicial);

  useEffect(() => {
    document.documentElement.dataset.tema = tema;
    localStorage.setItem('tema', tema);
  }, [tema]);

  const alternarTema = (): void =>
    setTema((atual) => (atual === Tema.Claro ? Tema.Escuro : Tema.Claro));

  return <TemaContext.Provider value={{ tema, alternarTema }}>{children}</TemaContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTema = (): TemaContextValue => {
  const ctx = useContext(TemaContext);
  if (!ctx) throw new Error('useTema deve ser usado dentro de TemaProvider');
  return ctx;
};
