import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useTema } from '../../../contexts/TemaContext';
import { Tema } from '../../../types/tema';
import Button from '../atoms/Button';

const Header = () => {
  const { tema, alternarTema } = useTema();
  const { autenticado, sair } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (): void => {
    sair();
    navigate('/login');
  };

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '12px 24px',
        borderBottom: '1px solid #ddd',
      }}
    >
      <strong style={{ fontSize: '1.2rem' }}>🛍️ Loja TS</strong>
      <nav style={{ display: 'flex', gap: '12px', flex: 1 }}>
        <Link to="/">Home</Link>
        <Link to="/criar-produto">Criar produto</Link>
      </nav>
      <Button variante="neutro" onClick={alternarTema}>
        {tema === Tema.Claro ? '🌙 Escuro' : '☀️ Claro'}
      </Button>
      {autenticado && (
        <Button variante="perigo" onClick={handleLogout}>
          Logout
        </Button>
      )}
    </header>
  );
};

export default Header;
