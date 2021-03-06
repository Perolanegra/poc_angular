import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppController } from './modules/core/default/appController';
import { AppMenuComponent } from './modules/menu/app-menu/app-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeaderComponent } from './modules/shared/components/header/header.component';
import { MaterialModule } from './modules/material/material.module';
import { MenuComponent } from './modules/shared/components/menu/menu.component';

// export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//   return localStorageSync({ keys: reducerKeys, rehydrate: true })(reducer);
// }

// const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    AppMenuComponent,
    HeaderComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [AppController],
  bootstrap: [AppComponent]
})
export class AppModule { }
