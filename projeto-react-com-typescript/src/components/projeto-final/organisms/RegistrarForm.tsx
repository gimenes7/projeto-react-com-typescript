import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useFormulario } from '../../../hooks/useFormulario';
import { PapelUsuario } from '../../../types/usuario';
import type { NovoUsuario } from '../../../types/usuario';
import Button from '../atoms/Button';
import Label from '../atoms/Label';
import FormField from '../molecules/FormField';

interface RegistrarFormProps {
  onSubmit: (dados: NovoUsuario) => Promise<void>;
}

const RegistrarForm = ({ onSubmit }: RegistrarFormProps) => {
  const [dados, handleChange] = useFormulario<NovoUsuario>({
    nome: '',
    email: '',
    role: PapelUsuario.Employee,
    senha: '',
  });
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

  const handleRole = (e: ChangeEvent<HTMLSelectElement>): void => handleChange(e);

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      <FormField
        label="Nome"
        name="nome"
        value={dados.nome}
        onChange={handleChange}
        placeholder="Digite seu nome"
        required
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={dados.email}
        onChange={handleChange}
        placeholder="Digite seu email"
        required
      />
      <div>
        <Label htmlFor="role">Role:</Label>
        <select
          id="role"
          name="role"
          value={dados.role}
          onChange={handleRole}
          style={{
            width: '100%',
            padding: '8px',
            marginTop: '4px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        >
          {Object.values(PapelUsuario).map((papel) => (
            <option key={papel} value={papel}>
              {papel}
            </option>
          ))}
        </select>
      </div>
      <FormField
        label="Senha"
        name="senha"
        type="password"
        value={dados.senha}
        onChange={handleChange}
        placeholder="Digite sua senha"
        required
      />
      <Button type="submit" variante="sucesso" disabled={enviando}>
        {enviando ? 'Salvando...' : 'Salvar'}
      </Button>
    </form>
  );
};

export default RegistrarForm;
