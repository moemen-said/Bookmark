import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private token: string = '';
  private tokenTimer: NodeJS.Timer;
  private isAuthenticated: boolean = false;
  private authStateLisnter = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStateListner() {
    return this.authStateLisnter.asObservable();
  }

  userSignup(email: string, password: string, name: string) {
    const user = { email: email, password: password, name: name };
    this.http
      .post('http://localhost:3000/api/auth/userSignup', user)
      .subscribe((res) => {
        console.log(res);
      });
  }

  userLogin(email: string, password: string) {
    const user = { email: email, password: password };
    this.http
      .post<{ token: string; expiresIn: number }>(
        'http://localhost:3000/api/auth/userLogin',
        user
      )
      .subscribe((res) => {
        this.token = res.token;
        if (this.token) {
          const expiresIn = res.expiresIn * 1000; //transform from milSec to Sec
          this.setAuthTimer(expiresIn);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresIn);
          this.saveAuthData(this.token, expirationDate);

          this.isAuthenticated = true;
          this.authStateLisnter.next(true);
        }
      });
  }

  userAutoLogin() {
    const authInf = this.getAuthData();
    if (!authInf) return;
    if (authInf.expirationDate.getTime() - Date.now() > 0) {
      this.token = authInf.token;
      this.isAuthenticated = true;
      this.authStateLisnter.next(true);
      this.setAuthTimer(authInf.expirationDate.getSeconds())
    }
  }

  userLogout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStateLisnter.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
  }

  setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.userLogout();
    }, duration);
  }

  private saveAuthData(token: string, expirationDate: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
  }

  private getAuthData() {
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    if (!token || !expirationDate) return;
    return {
      token: token,
      expirationDate: new Date(expirationDate),
    };
  }
}
