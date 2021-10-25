import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { HomeService } from 'src/app/modules/home/home.service';

import * as AccountActions from '../../actions/account/account.action';

@Injectable()
export class AccountEffects {

  constructor(
    private actions$: Actions,
    private service: HomeService
  ) { }

  getAccount$ = createEffect(() =>
    this.actions$.pipe(
      ofType<AccountActions.GetAccountAction>(AccountActions.AccountActionTypes.GetAccountAction),
      mergeMap(action =>

        this.service.validateCpf(action.payload)
          .pipe(
            mergeMap((res: any) => {
              if(!res.length) {
                return of (new AccountActions.SetNoRegisteredCpfAction())
              }
              return of(new AccountActions.StoreAccountAction(res[0])); // estrutura que o db.json retorna
            }),
            // catchError(err => [
            //   alert('Operação Indisponível no moment. Por favor, tente mais tarde.'),
            // ])
          )

      )
    )
  );

}
