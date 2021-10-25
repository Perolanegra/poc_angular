import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AccountState } from "../core/store/state/account";

@Injectable({
  providedIn: "any",
})
export class HomeService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  validateCpf(cpf: string): Observable<{ users: AccountState[] }> {
    const url = `${this.url}/users?cpf=${cpf}`;

    return this.http.get<{ users: AccountState[] }>(url, { params: {} });
  }

}
