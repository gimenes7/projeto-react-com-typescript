import type { Produto } from '../../../types/produto';
import ProductCard from '../molecules/ProductCard';

interface ProductListProps {
  produtos: Produto[];
  onEditar: (id: string) => void;
  onDeletar: (id: string) => void;
}

const ProductList = ({ produtos, onEditar, onDeletar }: ProductListProps) => {
  if (produtos.length === 0) return <p>Nenhum produto encontrado.</p>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {produtos.map((produto) => (
        <ProductCard
          key={produto._id}
          produto={produto}
          onEditar={onEditar}
          onDeletar={onDeletar}
        />
      ))}
    </div>
  );
};

export default ProductList;
