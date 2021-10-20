import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "../core/store/app-state";

@Injectable({
  providedIn: "any",
})
export class HomeService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient, private store: Store<AppState>) {}

}
