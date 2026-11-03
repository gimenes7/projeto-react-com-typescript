# 🔷 Projeto Final — React com TypeScript

> 7️⃣ **Meu 7º projeto.** O mesmo projeto final de React, reescrito do zero em **TypeScript**, com tipagem completa.

Aplicação em que a pessoa se registra, faz login e gerencia produtos (criar, listar, editar e deletar), usando a API Node do curso. A lógica é a mesma do [projeto de React](https://github.com/gimenes7/Projeto-react-step-arthur). O que muda é que agora **tudo tem tipo**: props, estados, eventos, contextos e chamadas de API.

## ⚙️ Funcionalidades

- **Registrar e Login**, com token guardado no `localStorage`
- **CRUD de produtos**: listar, criar, editar e deletar
- **Filtro de produtos** por nome, com o Autocomplete do Material UI
- **Tema claro e escuro**
- **Logout** no Header
- Código organizado em **Atomic Design**

## 🔷 O que eu pratiquei de TypeScript

| Conceito | Onde aparece no projeto |
|---|---|
| **Interfaces** | Props de todos os componentes e os formatos `Produto`, `Usuario` e `Credenciais` (`src/types`) |
| **Enums** | `PapelUsuario`, `Tema` e `CriterioFiltro` |
| **Union types e discriminated unions** | `RequestState<T>`: estados `loading`, `error` e `success` de uma requisição |
| **Generics** | `useState<T>`, `RequestState<T>`, `axios.get<Produto[]>` e o hook `useFormulario<T>` |
| **Tuples** | `useProdutos` devolve `[estado, recarregar]` tipado |
| **Utility types** | `Omit` para o payload do produto (sem `_id`) |
| **Eventos do React** | `FormEvent` e `ChangeEvent` nos formulários |
| **Contextos tipados** | `TemaContext` e `AuthContext` |
| **Funções tipadas** | Retornos como `Promise<void>` e `Promise<Produto[]>` na camada de API |

O projeto roda com `"strict": true`, que obriga todo valor a ter um tipo.

## 🛠️ Tecnologias utilizadas

- React 19 e Vite
- TypeScript
- React Router
- Axios
- Material UI

## 🗂️ Organização (Atomic Design)

```
src/
 ├── components/projeto-final/
 │    ├── atoms/        Button, Input, Label
 │    ├── molecules/    FormField, ProductCard
 │    ├── organisms/    Header, LoginForm, RegistrarForm, ProductForm, ProductList, FiltroProdutos
 │    ├── templates/    PageLayout
 │    └── pages/        Home, Login, Registrar, CriarProduto, EditarProduto
 ├── contexts/          TemaContext, AuthContext
 ├── hooks/             useProdutos, useFormulario
 ├── services/          api.ts (chamadas à API)
 ├── types/             produto.ts, usuario.ts, tema.ts
 ├── App.tsx
 └── main.tsx
```

## 🚀 Como rodar o projeto

O projeto fica dentro da pasta `projeto-react-com-typescript`:

```bash
cd projeto-react-com-typescript
npm install
npm run dev
```

Depois abra o endereço que o terminal mostrar (normalmente `http://localhost:5173`).

Para testar o CRUD, registre-se ou faça login primeiro: criar, editar e deletar exigem o token da API.

Outros comandos úteis:

```bash
npx tsc --noEmit   # só confere os tipos
npm run build      # confere os tipos e gera a pasta dist
```

## ✍️ Autor

Desenvolvido por **Arthur Gimenes**. Meu 7º projeto.
