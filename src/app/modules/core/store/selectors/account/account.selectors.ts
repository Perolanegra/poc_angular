import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AccountState } from '../../state/account';
import { accountFeatureKey } from '../../reducers/account/account.reducer';

const feature = createFeatureSelector<AccountState>(accountFeatureKey);

export const getUserCpf = createSelector(feature, state => state.cpf);