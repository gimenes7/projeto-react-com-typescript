import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { Produto, ProdutoFormData, ProdutoPayload } from '../../../types/produto';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

interface ProductFormProps {
  produtoInicial?: Produto;
  textoBotao: string;
  onSubmit: (produto: ProdutoPayload) => Promise<void>;
}

const formVazio: ProdutoFormData = {
  nome: '',
  preco: '',
  descricao: '',
  categoria: '',
  imagem: '',
  avaliacao: { nota: '', quantidade: '' },
};

const paraFormData = (p?: Produto): ProdutoFormData =>
  p === undefined
    ? formVazio
    : {
        nome: p.nome,
        preco: String(p.preco),
        descricao: p.descricao,
        categoria: p.categoria,
        imagem: p.imagem,
        avaliacao: {
          nota: String(p.avaliacao?.nota ?? ''),
          quantidade: String(p.avaliacao?.quantidade ?? ''),
        },
      };

const paraPayload = (f: ProdutoFormData): ProdutoPayload => ({
  nome: f.nome,
  preco: Number(f.preco),
  descricao: f.descricao,
  categoria: f.categoria,
  imagem: f.imagem,
  avaliacao: {
    nota: Number(f.avaliacao.nota),
    quantidade: Number(f.avaliacao.quantidade),
  },
});

const ProductForm = ({ produtoInicial, textoBotao, onSubmit }: ProductFormProps) => {
  const [formData, setFormData] = useState<ProdutoFormData>(() => paraFormData(produtoInicial));
  const [enviando, setEnviando] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((atual) => ({ ...atual, [name]: value }));
  };

  const handleAvaliacaoChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData((atual) => ({ ...atual, avaliacao: { ...atual.avaliacao, [name]: value } }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setEnviando(true);
    try {
      await onSubmit(paraPayload(formData));
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      <FormField label="Nome" name="nome" value={formData.nome} onChange={handleChange} required />
      <FormField
        label="Preço"
        name="preco"
        type="number"
        step="0.01"
        value={formData.preco}
        onChange={handleChange}
        required
      />
      <FormField
        label="Descrição"
        name="descricao"
        value={formData.descricao}
        onChange={handleChange}
        multiline
      />
      <FormField
        label="Categoria"
        name="categoria"
        value={formData.categoria}
        onChange={handleChange}
        placeholder="Ex: masculino, feminino, eletronicos"
      />
      <FormField
        label="Imagem (URL)"
        name="imagem"
        value={formData.imagem}
        onChange={handleChange}
        placeholder="https://..."
      />
      <FormField
        label="Nota da avaliação"
        name="nota"
        type="number"
        step="0.1"
        value={formData.avaliacao.nota}
        onChange={handleAvaliacaoChange}
      />
      <FormField
        label="Quantidade de avaliações"
        name="quantidade"
        type="number"
        value={formData.avaliacao.quantidade}
        onChange={handleAvaliacaoChange}
      />
      <Button type="submit" variante="sucesso" disabled={enviando}>
        {enviando ? 'Salvando...' : textoBotao}
      </Button>
    </form>
  );
};

export default ProductForm;
