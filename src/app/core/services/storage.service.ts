import { Injectable } from "@angular/core";
import { IOutputLogin } from 'src/app/stores/app/types';

export const USER = "USER";
export const TOKEN = "TOKEN";
export const ISCONFIRMED2fa = "ISCONFIRMED2fa";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private token!: string;

  public saveUser(user: IOutputLogin) {
    localStorage.setItem(USER, JSON.stringify(user));
  }

  public get getUser(): IOutputLogin {
    return JSON.parse(localStorage.getItem(USER) as string);
  }

  public removeUser(): void {
    localStorage.removeItem(USER);
  }

  public saveToken(token: string) {
    localStorage.setItem(TOKEN, token);
  }

  public get getToken(): string {
    return JSON.parse(localStorage.getItem(TOKEN) as string);
  }

  public removeToken(): void {
    localStorage.removeItem(TOKEN);
  }
}
