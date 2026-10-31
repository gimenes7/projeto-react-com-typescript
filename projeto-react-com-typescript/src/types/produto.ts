export interface Avaliacao {
  nota: number;
  quantidade: number;
}

export interface Produto {
  _id: string;
  nome: string;
  preco: number;
  descricao: string;
  categoria: string;
  imagem: string;
  avaliacao: Avaliacao;
}

// No formulário os campos numéricos são strings (vêm de <input>)
export interface ProdutoFormData {
  nome: string;
  preco: string;
  descricao: string;
  categoria: string;
  imagem: string;
  avaliacao: {
    nota: string;
    quantidade: string;
  };
}

// O que a API recebe no POST/PUT (sem _id e __v)
export type ProdutoPayload = Omit<Produto, '_id'>;

export enum CriterioFiltro {
  Nome = 'nome',
  Categoria = 'categoria',
  Preco = 'preco',
}

// Discriminated union: estado de uma requisição
export type RequestState<T> =
  | { status: 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; data: T };
