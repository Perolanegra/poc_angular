import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppController } from "./modules/core/default/appController";
import { HomeService } from "./modules/home/home.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "poc_angular";

  constructor(
    private appController: AppController,
    public router: Router,
    private homeService: HomeService
  ) {}

  ngOnInit(): void {
  }

  openMenu(): void {
    this.appController.triggerCustomEvent("HandleDrawer", {
      value: true,
    });
  }
 
}
