import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "any",
})
export class HomeService {
  url = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  validateCpf(cpf: string): Observable<any[]> {
    const url = `${this.url}/users?cpf=${cpf}`;
    return this.http.get(url, { params: {} }) as Observable<any[]>;
  }

}
