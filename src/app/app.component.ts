import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppController } from "./modules/core/default/appController";
import { AppState } from "./modules/core/store/app-state";
import { HomeService } from "./modules/home/home.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "base_project_ngrx";

  constructor(
    private store: Store<AppState>,
    private appController: AppController,
    public router: Router,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
  }


  // updateCountries(resp: any): void {
  //   this.store.dispatch(UpdateCountries(resp));
  // }

  // getUserInfo(): void {
  //   const { balance, username } = selectAccount(this.store);
  //   this.userBalance = balance;
  //   this.userEmail = username;
  // }

  openMenu(): void {
    this.appController.triggerCustomEvent("HandleDrawer", {
      value: true,
    });
  }
 
}
