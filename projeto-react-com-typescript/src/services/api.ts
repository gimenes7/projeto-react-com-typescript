import axios, { isAxiosError } from 'axios';
import type { AxiosRequestConfig } from 'axios';
import type { ErroApi, Credenciais, NovoUsuario, RespostaAuth } from '../types/usuario';
import type { Produto, ProdutoPayload } from '../types/produto';

const BASE_URL = 'https://projeto-node-step-t5i1.vercel.app';

const authConfig = (): AxiosRequestConfig => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token') ?? ''}` },
});

export const getErrorMessage = (error: unknown): string => {
  if (isAxiosError<ErroApi>(error)) {
    return error.response?.data?.message ?? error.response?.data?.error ?? error.message;
  }
  if (error instanceof Error) return error.message;
  return 'Erro desconhecido';
};

export const login = async (dados: Credenciais): Promise<RespostaAuth> => {
  const { data } = await axios.post<RespostaAuth>(`${BASE_URL}/login`, dados);
  return data;
};

export const registrar = async (dados: NovoUsuario): Promise<RespostaAuth> => {
  const { data } = await axios.post<RespostaAuth>(`${BASE_URL}/registrar`, dados);
  return data;
};

export const listarProdutos = async (): Promise<Produto[]> => {
  const { data } = await axios.get<Produto[]>(`${BASE_URL}/produtos`);
  return data;
};

export const buscarProduto = async (id: string): Promise<Produto> => {
  const { data } = await axios.get<Produto>(`${BASE_URL}/produtos/${id}`);
  return data;
};

export const criarProduto = async (produto: ProdutoPayload): Promise<Produto> => {
  const { data } = await axios.post<Produto>(`${BASE_URL}/produtos`, produto, authConfig());
  return data;
};

export const atualizarProduto = async (id: string, produto: ProdutoPayload): Promise<Produto> => {
  const { data } = await axios.put<Produto>(`${BASE_URL}/produtos/${id}`, produto, authConfig());
  return data;
};

export const deletarProduto = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/produtos/${id}`, authConfig());
};
