import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppController } from "../core/default/appController";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor(
    private appController: AppController
  ) {}

  ngOnInit(): void {
    
  }
}
