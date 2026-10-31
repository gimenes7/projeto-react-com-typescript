import { useCallback, useEffect, useState } from 'react';
import { getErrorMessage, listarProdutos } from '../services/api';
import type { Produto, RequestState } from '../types/produto';

// Tuple tipada: [estado da requisição, função para recarregar]
export const useProdutos = (): [RequestState<Produto[]>, () => Promise<void>] => {
  const [estado, setEstado] = useState<RequestState<Produto[]>>({ status: 'loading' });

  const carregar = useCallback(async (): Promise<void> => {
    try {
      const data = await listarProdutos();
      setEstado({ status: 'success', data });
    } catch (error) {
      setEstado({ status: 'error', message: getErrorMessage(error) });
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void carregar();
  }, [carregar]);

  return [estado, carregar];
};
