import { AccountState } from '../../state/account';
import * as Actions from '../../actions/account/account.action';

export const accountFeatureKey = 'account';

export const initialState: AccountState = {
  balance: '',
  cpf: '',
  id: '',
  password: '',
  username: '',
  hasNoRegisterCpf: false
};

export function reducer(state = initialState, action: Actions.AccountActions): AccountState {

  switch (action.type) {

    case Actions.AccountActionTypes.StoreAccountAction:
      return { ...action.payload };

    case Actions.AccountActionTypes.ClearAccountAction:
      return { cpf: '', balance: '', id: '', password: '', username: '', hasNoRegisterCpf: false };

    case Actions.AccountActionTypes.SetNoRegisteredCpfAction:
      return { ...state, hasNoRegisterCpf: true };

    default:
      return state;
  }

}
