import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { select, Store } from "@ngrx/store";
import { MASKS, NgBrazilValidators } from "ng-brazil";
import { Subscription } from "rxjs";
import { AppController } from "../core/default/appController";
import { ClearAccountAction, GetAccountAction } from "../core/store/actions/account/account.action";
import { getNoRegisteredCpf, getUserCpf } from "../core/store/selectors/account/account.selectors";
import { AccountState } from "../core/store/state/account";
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private fb: FormBuilder,
    private appController: AppController,
    private accStore: Store<AccountState>
  ) { }

  public MASKS = MASKS;

  showResults: boolean = false;

  openSubscriptionCpf$!: Subscription;
  openSubscriptionNoRegisterCpf$!: Subscription;

  form!: FormGroup;

  ngOnInit(): void {
    this.createForm();
    this.getCpfState();
  }

  ngOnDestroy(): void {
    this.openSubscriptionCpf$.unsubscribe();
    this.openSubscriptionNoRegisterCpf$.unsubscribe();
  }

  getCpfState(): void {
    this.openSubscriptionCpf$ =
      this.accStore.pipe(select(getUserCpf))
        .subscribe(state => {
          if (state) {
            this.showResults = true;
          }
        })

    this.openSubscriptionNoRegisterCpf$ = this.accStore.pipe(select(getNoRegisteredCpf))
      .subscribe(state => {
        if (state) {
          alert("Este CPF não está cadastrado na base de dados: " + this.form?.controls?.cpf?.value.toString());
          this.form?.controls?.cpf?.setValue('');
        }
      })
  }

  typing(event: any): void {
    if (event.key === "Backspace") {
      this.clearState(true);
    }
  }

  clearState(fromTyping?: boolean): void {
    fromTyping ? '' : this.form?.controls?.cpf?.setValue('');
    this.showResults = false;
    this.accStore.dispatch(new ClearAccountAction());
  }

  createForm(): void {
    this.form = this.fb.group({
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
    });
  }

  getFieldError(field: string, error: string): boolean {
    return this.appController.getFieldError(this.form, field, error);
  }

  submit(): void {
    if (this.form.valid) {
      this.accStore.dispatch(new GetAccountAction(this.form.controls.cpf.value));
    }
  }
}
