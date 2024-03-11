import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private readonly httpClient: HttpClient) {

    }

    requestLogin(user: string, password: string) {
        const headersToSend = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'uid': user,
            'password': password
        }

        const requestOptions = {
            headers: new HttpHeaders(headersToSend),
        };
        return this.httpClient.get('/login', requestOptions);
    }
}