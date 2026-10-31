import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { getErrorMessage, login } from '../../../services/api';
import type { Credenciais } from '../../../types/usuario';
import LoginForm from '../organisms/LoginForm';
import PageLayout from '../templates/PageLayout';

const Login = () => {
  const { entrar } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (dados: Credenciais): Promise<void> => {
    try {
      const resposta = await login(dados);
      entrar(resposta.token);
      navigate('/');
    } catch (error) {
      alert(`Erro ao fazer login: ${getErrorMessage(error)}`);
    }
  };

  return (
    <PageLayout titulo="Login" larguraMax={400}>
      <LoginForm onSubmit={handleLogin} />
    </PageLayout>
  );
};

export default Login;
