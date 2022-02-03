import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { user } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userData: user = null;
  private token: string = '';
  private tokenTimer: NodeJS.Timer;
  private isAuthenticated: boolean = false;
  private authStateLisnter = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  getToken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getAuthStateListner() {
    return this.authStateLisnter.asObservable();
  }

  getuserData() {
    if (!this.userData) return ;
    return this.userData;
  }

  userSignup(email: string, password: string, name: string) {
    const user = { email: email, password: password, name: name };
    this.http
      .post<{ success: boolean }>(
        'http://localhost:3000/api/auth/userSignup',
        user
      )
      .subscribe((res) => {
        if (res.success) {
          this.userLogin(email, password);
        }
      });
  }

  userLogin(email: string, password: string) {
    const user = { email: email, password: password };
    this.http
      .post<{
        token: string;
        expiresIn: number;
        success: boolean;
        user: user;
      }>('http://localhost:3000/api/auth/userLogin', user)
      .subscribe((res) => {
        this.token = res.token;
        if (this.token && res.success) {
          const expiresIn = res.expiresIn * 1000; //transform from milSec to Sec
          this.setAuthTimer(expiresIn);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresIn);
          this.saveAuthData(res.user, this.token, expirationDate);

          this.isAuthenticated = true;
          this.userData = res.user;
          this.authStateLisnter.next(true);

          this.router.navigate(['/']);
        }
      });
  }

  userAutoLogin() {
    const authInf = this.getAuthData();
    if (!authInf) return;
    const remainingAuthTime = authInf.expirationDate.getTime() - Date.now();
    if (remainingAuthTime > 0) {
      this.token = authInf.token;
      this.userData = JSON.parse(authInf.user);
      this.isAuthenticated = true;
      this.authStateLisnter.next(true);
      this.setAuthTimer(remainingAuthTime);
    }
  }

  userLogout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStateLisnter.next(false);
    this.userData = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
  }

  setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.userLogout();
    }, duration);
  }

  private saveAuthData(user: user, token: string, expirationDate: Date) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    localStorage.setItem('expirationDate', expirationDate.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
  }

  private getAuthData() {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expirationDate');
    if (!token || !expirationDate || !user) return;
    return {
      user: user,
      token: token,
      expirationDate: new Date(expirationDate),
    };
  }
}
