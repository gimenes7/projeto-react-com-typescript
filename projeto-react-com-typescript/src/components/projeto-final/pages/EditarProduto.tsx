import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { atualizarProduto, buscarProduto, getErrorMessage } from '../../../services/api';
import type { Produto, ProdutoPayload, RequestState } from '../../../types/produto';
import ProductForm from '../organisms/ProductForm';
import PageLayout from '../templates/PageLayout';

type ParamsRota = { id: string };

const EditarProduto = () => {
  const { id } = useParams<ParamsRota>();
  const navigate = useNavigate();
  const [estado, setEstado] = useState<RequestState<Produto>>({ status: 'loading' });

  useEffect(() => {
    if (!id) return;
    let ativo = true;
    buscarProduto(id)
      .then((data) => ativo && setEstado({ status: 'success', data }))
      .catch((error: unknown) => ativo && setEstado({ status: 'error', message: getErrorMessage(error) }));
    return () => {
      ativo = false;
    };
  }, [id]);

  const handleAtualizar = async (produto: ProdutoPayload): Promise<void> => {
    if (!id) return;
    try {
      await atualizarProduto(id, produto);
      alert('Produto atualizado com sucesso!');
      navigate('/');
    } catch (error) {
      alert(`Erro ao atualizar produto: ${getErrorMessage(error)}`);
    }
  };

  return (
    <PageLayout titulo="Editar Produto" larguraMax={400}>
      {estado.status === 'loading' && <p>Carregando produto...</p>}
      {estado.status === 'error' && <p>Erro: {estado.message}</p>}
      {estado.status === 'success' && (
        <ProductForm produtoInicial={estado.data} textoBotao="Salvar" onSubmit={handleAtualizar} />
      )}
    </PageLayout>
  );
};

export default EditarProduto;
