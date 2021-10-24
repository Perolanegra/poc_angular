import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule, CurrencyPipe } from "@angular/common";
import { BoxbalancePipe } from './pipes/boxbalance.pipe';
import { NgBrazil } from 'ng-brazil' 
import { TextMaskModule } from "angular2-text-mask";

@NgModule({
  imports: [
    CommonModule,
    NgBrazil,
    TextMaskModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    BoxbalancePipe
  ],
  exports: [
    BoxbalancePipe,
    TextMaskModule
  ],
  providers: [
    CurrencyPipe
  ],
  entryComponents: [], // dialogs providers
})
export class SharedModule {}
