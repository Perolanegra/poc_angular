import { Action } from '@ngrx/store';
import { AccountState } from '../../state/account';

export enum AccountActionTypes {
  GetAccountAction = '[Account] Get Account State',
  StoreAccountAction = '[Account] Store Account State',
  ClearAccountAction = '[Account] Clear Account State',
  SetNoRegisteredCpfAction = '[Account] Set Invalid Cpf State',
}

export class GetAccountAction implements Action {
  readonly type = AccountActionTypes.GetAccountAction;
  constructor(public payload: any) { }
}

export class StoreAccountAction implements Action {
  readonly type = AccountActionTypes.StoreAccountAction;
  constructor(public payload: AccountState) { }
}

export class ClearAccountAction implements Action {
  readonly type = AccountActionTypes.ClearAccountAction;
}

export class SetNoRegisteredCpfAction implements Action {
  readonly type = AccountActionTypes.SetNoRegisteredCpfAction;
}


export type AccountActions =
GetAccountAction | 
StoreAccountAction | 
ClearAccountAction | 
SetNoRegisteredCpfAction;

