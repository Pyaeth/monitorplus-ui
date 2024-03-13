import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { AmountRepresentation } from "../models/amount-representation.model";

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
    providedIn: 'root'
})
export class HttpService {

    private BACK_URL = 'http://localhost:8080/api';
    private requestOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        }),
    };
    constructor(private readonly httpClient: HttpClient) {
    }

    getCurrentMonthlySummary(index: number) {
        return this.httpClient.get(`${this.BACK_URL}/dashboard/requestMonth/${index}`, this.requestOptions);
    }

    addRecordToMonth(amount: AmountRepresentation) {
        return this.httpClient.post<any>(`${this.BACK_URL}/dashboard/createAccount`, amount, this.requestOptions);
    }

    getAvailableCurrencies() {
        return this.httpClient.get(`${this.BACK_URL}/currencies`, this.requestOptions);
    }
}