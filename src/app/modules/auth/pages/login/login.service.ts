import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

import { StorageService } from "src/app/core/services/storage.service";
import { IOutputLogin } from 'src/app/stores/app/types';

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  login(user: IOutputLogin): Observable<{ token: string }> {
    return this.http.post<{ token: string }>("/api/auth/login", user);
  }
}

interface IUserFormData {
  phone: string;
  password: string;
  rememberUser: boolean;
}
