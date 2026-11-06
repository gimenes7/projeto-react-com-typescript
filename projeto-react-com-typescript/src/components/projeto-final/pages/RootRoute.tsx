import { useAuth } from '../../../contexts/AuthContext';
import Home from './Home';
import Registrar from './Registrar';

// Rota "/": com token mostra a Home; sem token mostra a tela de Registrar.
const RootRoute = () => {
  const { autenticado } = useAuth();
  return autenticado ? <Home /> : <Registrar />;
};

export default RootRoute;
