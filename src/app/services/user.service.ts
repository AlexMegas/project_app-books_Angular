import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,
    private router: Router) { }

  private url: string = 'http://localhost:8080/api/users';
  public user: User;

  signup(user): Promise<{ user: User }> {
    return this.http.post<{ user: User }>(`${this.url}/signup`, user).toPromise();
  };

  login(user): Promise<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.url}/login`, user).toPromise();
  };

  logout(): Promise<any> {
    return this.http.get<any>(`${this.url}/logout`).toPromise(); // token to be provided to backend as Header ?
  };

  loggedIn() {
    return !!localStorage.getItem('token'); // boolean value
  };

  getToken() {
    return localStorage.getItem('token');
  };

}
