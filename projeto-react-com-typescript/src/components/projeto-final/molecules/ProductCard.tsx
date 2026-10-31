import type { Produto } from '../../../types/produto';
import Button from '../atoms/Button';

interface ProductCardProps {
  produto: Produto;
  onEditar: (id: string) => void;
  onDeletar: (id: string) => void;
}

const ProductCard = ({ produto, onEditar, onDeletar }: ProductCardProps) => (
  <article
    style={{
      display: 'flex',
      gap: '12px',
      padding: '12px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      alignItems: 'center',
    }}
  >
    {produto.imagem && (
      <img
        src={produto.imagem}
        alt={produto.nome}
        style={{ width: 64, height: 64, objectFit: 'contain' }}
      />
    )}
    <div style={{ flex: 1 }}>
      <strong>{produto.nome}</strong>
      <div>R$ {Number(produto.preco).toFixed(2)}</div>
      <small>{produto.categoria}</small>
    </div>
    <Button variante="primario" onClick={() => onEditar(produto._id)}>
      editar
    </Button>
    <Button variante="perigo" onClick={() => onDeletar(produto._id)}>
      deletar
    </Button>
  </article>
);

export default ProductCard;
