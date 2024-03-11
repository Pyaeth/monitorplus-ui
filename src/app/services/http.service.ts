import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private BACK_URL = 'http://localhost:8081/api';
    private requestOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      };
    constructor(private readonly httpClient: HttpClient) {
    }

    requestLogin(user: string, password: string) {
        return this.httpClient.get(`${this.BACK_URL}/user-login`, this.requestOptions);
    }

    registerNewUser(email: string, password: string) {
        const body = {
            email: email,
            password: password,
            firstName: '',
            lastName: '',
            userId: '',
            defaultCurrency: '',
            isActive: true,
            lastConnectionDate: Date.now(),
            lastConnectionAddress: ''
        }

        return this.httpClient.post(`${this.BACK_URL}/register-user`, body, this.requestOptions);
    }

    getAvailableCurrencies() {
        return this.httpClient.get(`${this.BACK_URL}/currencies`, this.requestOptions);
    }
}