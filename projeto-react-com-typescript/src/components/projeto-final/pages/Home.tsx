import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProdutos } from '../../../hooks/useProdutos';
import { deletarProduto, getErrorMessage } from '../../../services/api';
import FiltroProdutos from '../organisms/FiltroProdutos';
import ProductList from '../organisms/ProductList';
import PageLayout from '../templates/PageLayout';

const Home = () => {
  const [estado, recarregar] = useProdutos();
  const [filtro, setFiltro] = useState<string | null>(null);
  const navigate = useNavigate();

  const nomes = useMemo<string[]>(
    () => (estado.status === 'success' ? estado.data.map((p) => p.nome) : []),
    [estado],
  );

  const handleDeletar = async (id: string): Promise<void> => {
    try {
      await deletarProduto(id);
      await recarregar();
    } catch (error) {
      alert(`Erro ao deletar produto: ${getErrorMessage(error)}`);
    }
  };

  const renderConteudo = () => {
    switch (estado.status) {
      case 'loading':
        return <p>Carregando produtos...</p>;
      case 'error':
        return <p>Erro: {estado.message}</p>;
      case 'success': {
        const termo = filtro?.trim().toLowerCase();
        const filtrados = termo
          ? estado.data.filter((p) => p.nome.toLowerCase().includes(termo))
          : estado.data;
        return (
          <>
            <FiltroProdutos nomes={nomes} onFiltrar={setFiltro} />
            <ProductList
              produtos={filtrados}
              onEditar={(id) => navigate(`/produto/${id}`)}
              onDeletar={handleDeletar}
            />
          </>
        );
      }
    }
  };

  return (
    <PageLayout titulo="Produtos" larguraMax={720}>
      {renderConteudo()}
    </PageLayout>
  );
};

export default Home;
