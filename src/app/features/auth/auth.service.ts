import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../../models/login.model";
import {Observable} from "rxjs";
import {API_URL} from "../../../environments/environment";
import {Token} from "../../models/token.model";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  TOKEN_KEY = 'TOKEN';

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  onAuthenticate(login: Login): Observable<Token> {
    return this.http.post<Token>(`${API_URL}/api/authenticate`, login);
  }

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  onLogout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    this.router.navigate(['/auth']);
  }
}
