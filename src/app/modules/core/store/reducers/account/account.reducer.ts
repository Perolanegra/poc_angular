import { AccountState } from '../../state/account';
import * as Actions from '../../actions/account/account.action';

export const accountFeatureKey = 'account';

export const initialState: AccountState = {
  balance: '',
  cpf: '',
  id: '',
  password: '',
  username: ''
};

export function reducer(state = initialState, action: Actions.AccountActions): AccountState {

  switch (action.type) {

    case Actions.AccountActionTypes.UpdateAccountState:
      return { ...state, ...action.payload };

    case Actions.AccountActionTypes.ClearAccountState:
      return { ...state };

    default:
      return state;
  }

}
