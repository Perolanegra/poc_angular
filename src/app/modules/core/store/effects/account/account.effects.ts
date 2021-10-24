import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, mergeMap, switchMap } from 'rxjs/operators';

// import * as TransactionsActions from './transactions.actions';
// import * as ModalsActions from '../../modals/store/modals.actions';


@Injectable()
export class AccountEffects {

  constructor(
    // private actions$: Actions,
    // private transactionService: service,
  ) { }

//   getCpf$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType<TransactionsActions.GetCPFAction>(TransactionsActions.TransactionsActionTypes.PinDeposit),
//       switchMap(action =>

//         this.transactionService.getCpf(action.payload.pin)
//           .pipe(
//             mergeMap(res => [
//               new TransactionsActions.GetCpf(res)
//             ]),
//             catchError(err => [
//                 new TransactionsActions.GetCpf(res)
//             ])
//           )

//       )
//     )
//   );

}
