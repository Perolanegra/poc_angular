import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { MaterialModule } from "../material/material.module";
import { HomeRoutingModule } from "./home-routing.module";
import { HomeService } from "./home.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { accountFeatureKey, reducer } from "../core/store/reducers/account/account.reducer";
import { AccountEffects } from "../core/store/effects/account/account.effects";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    StoreModule.forFeature(accountFeatureKey, reducer),
    EffectsModule.forFeature([AccountEffects]),
    SharedModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
