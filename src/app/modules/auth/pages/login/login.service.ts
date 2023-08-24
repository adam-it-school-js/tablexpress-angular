import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(userData: UserDataInterface): Observable<{token: string}> {
    return this.http.post<{token: string}>('api/auth/login', userData);
  }
}

interface UserInterface {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}


interface UserDataInterface {
  phone: string;
  password: string;
  rememberUser: boolean;
}
