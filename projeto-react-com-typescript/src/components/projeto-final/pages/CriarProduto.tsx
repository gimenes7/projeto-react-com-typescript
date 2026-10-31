import { useNavigate } from 'react-router-dom';
import { criarProduto, getErrorMessage } from '../../../services/api';
import type { ProdutoPayload } from '../../../types/produto';
import ProductForm from '../organisms/ProductForm';
import PageLayout from '../templates/PageLayout';

const CriarProduto = () => {
  const navigate = useNavigate();

  const handleCriar = async (produto: ProdutoPayload): Promise<void> => {
    try {
      await criarProduto(produto);
      alert('Produto cadastrado com sucesso!');
      navigate('/');
    } catch (error) {
      alert(`Erro ao cadastrar produto: ${getErrorMessage(error)}`);
    }
  };

  return (
    <PageLayout titulo="Criar Produto" larguraMax={400}>
      <ProductForm textoBotao="Salvar" onSubmit={handleCriar} />
    </PageLayout>
  );
};

export default CriarProduto;
