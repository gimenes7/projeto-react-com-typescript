import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { useFormulario } from '../../../hooks/useFormulario';
import type { Credenciais } from '../../../types/usuario';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

interface LoginFormProps {
  onSubmit: (dados: Credenciais) => Promise<void>;
}

const LoginForm = ({ onSubmit }: LoginFormProps) => {
  const [dados, handleChange] = useFormulario<Credenciais>({ email: '', senha: '' });
  const [enviando, setEnviando] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setEnviando(true);
    try {
      await onSubmit(dados);
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      <FormField
        label="Email"
        name="email"
        type="email"
        value={dados.email}
        onChange={handleChange}
        placeholder="Digite seu email"
        required
      />
      <FormField
        label="Senha"
        name="senha"
        type="password"
        value={dados.senha}
        onChange={handleChange}
        placeholder="Digite sua senha"
        required
      />
      <Button type="submit" disabled={enviando}>
        {enviando ? 'Entrando...' : 'Entrar'}
      </Button>
      <p style={{ textAlign: 'center', margin: 0 }}>
        Não tem conta? <Link to="/registrar">Registre-se</Link>
      </p>
    </form>
  );
};

export default LoginForm;
