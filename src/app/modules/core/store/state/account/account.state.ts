export interface AccountState {
  id: string;
  username: string;
  password: string;
  balance: string;
  cpf: string;
  hasNoRegisterCpf?: boolean
}