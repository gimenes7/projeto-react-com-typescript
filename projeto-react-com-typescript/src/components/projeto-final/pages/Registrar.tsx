import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { getErrorMessage, registrar } from '../../../services/api';
import type { NovoUsuario } from '../../../types/usuario';
import RegistrarForm from '../organisms/RegistrarForm';
import PageLayout from '../templates/PageLayout';

const Registrar = () => {
  const { entrar } = useAuth();
  const navigate = useNavigate();

  const handleRegistrar = async (dados: NovoUsuario): Promise<void> => {
    try {
      const resposta = await registrar(dados);
      entrar(resposta.token);
      alert('Usuário registrado com sucesso!');
      navigate('/');
    } catch (error) {
      alert(`Erro ao registrar usuário: ${getErrorMessage(error)}`);
    }
  };

  return (
    <PageLayout titulo="Registrar" larguraMax={400}>
      <RegistrarForm onSubmit={handleRegistrar} />
    </PageLayout>
  );
};

export default Registrar;
