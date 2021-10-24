import { Action } from '@ngrx/store';

export enum AccountActionTypes {
  UpdateAccountState = '[Account] Update Account',
  ClearAccountState = '[Account] Clear Account State',
}

export class UpdateAccountAction implements Action {
  readonly type = AccountActionTypes.UpdateAccountState;
  constructor(public payload: any) { }
}

export class ClearAccountAction implements Action {
  readonly type = AccountActionTypes.ClearAccountState;
}

export type AccountActions =
  UpdateAccountAction |
  ClearAccountAction;

