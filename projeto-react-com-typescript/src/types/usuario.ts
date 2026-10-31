export enum PapelUsuario {
  Admin = 'admin',
  Manager = 'manager',
  Employee = 'employee',
}

export interface Usuario {
  _id: string;
  nome: string;
  email: string;
  role: PapelUsuario;
}

export interface Credenciais {
  email: string;
  senha: string;
}

export interface NovoUsuario extends Credenciais {
  nome: string;
  role: PapelUsuario;
}

export interface RespostaAuth {
  token: string;
  usuario?: Usuario;
}

export interface ErroApi {
  message?: string;
  error?: string;
}
