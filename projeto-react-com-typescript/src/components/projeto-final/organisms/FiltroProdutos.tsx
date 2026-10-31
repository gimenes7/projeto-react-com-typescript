import { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Button from '../atoms/Button';

interface FiltroProdutosProps {
  nomes: string[];
  onFiltrar: (nome: string | null) => void;
}

const FiltroProdutos = ({ nomes, onFiltrar }: FiltroProdutosProps) => {
  const [selecionado, setSelecionado] = useState<string | null>(null);

  return (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
      <Autocomplete<string, false, false, true>
        freeSolo
        options={nomes}
        value={selecionado}
        onInputChange={(_event, valor) => setSelecionado(valor === '' ? null : valor)}
        sx={{ flex: 1 }}
        renderInput={(params) => <TextField {...params} label="Buscar produto por nome" size="small" />}
      />
      <Button onClick={() => onFiltrar(selecionado)}>Filtrar</Button>
      <Button
        variante="neutro"
        onClick={() => {
          setSelecionado(null);
          onFiltrar(null);
        }}
      >
        Limpar
      </Button>
    </div>
  );
};

export default FiltroProdutos;
