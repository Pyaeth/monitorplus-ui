import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { environment } from "../environments/environment.prod";

@Injectable({
    providedIn: 'root',
  })
  export class AuthenticationService {
    private serverUrl = environment.api;
  
    constructor(private httpClient: HttpClient) { }
  
    getValidLogin(username: string, password: string) {
      const requestOptions = {
        headers : new HttpHeaders({'Content-Type': 'application/json'
      }),
      };
      return this.httpClient.post<any>(`${this.serverUrl}/auth/login`, { username: username, password: password }, requestOptions);
    }
  
    setLogout() {
      sessionStorage.clear();
    }
  
    createUser(username: string, email: string, password: string) {
      const requestOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      };
      return this.httpClient.post<any>(`${this.serverUrl}/auth/register-user`, { username: username, email: email, password: password }, requestOptions);
    }
  }