import { Component, Input, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/modules/core/store/app-state";

@Component({
  selector: "app-menu",
  templateUrl: "./app-menu.component.html",
  styleUrls: ["./app-menu.component.scss"],
})
export class AppMenuComponent {
  constructor(private store: Store<AppState>) {}

}
