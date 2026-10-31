import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { TemaProvider } from './contexts/TemaContext';
import CriarProduto from './components/projeto-final/pages/CriarProduto';
import EditarProduto from './components/projeto-final/pages/EditarProduto';
import Home from './components/projeto-final/pages/Home';
import Login from './components/projeto-final/pages/Login';
import Registrar from './components/projeto-final/pages/Registrar';

const App = () => (
  <TemaProvider>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/criar-produto" element={<CriarProduto />} />
          <Route path="/produto/:id" element={<EditarProduto />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </TemaProvider>
);

export default App;
