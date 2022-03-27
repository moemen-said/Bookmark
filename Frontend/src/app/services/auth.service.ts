import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { CartService } from './cart.service';
import { SharedService } from './shared.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userData: User = null;
  private token: string = '';
  private tokenTimer: NodeJS.Timer;
  private isAuthenticated: boolean = false;
  private authStateLisnter = new Subject<boolean>();

  // private apiUrl = 'http://localhost:3000/api/';
  private apiUrl = 'https://bookmark-store-app.herokuapp.com/api/';

  constructor(private http: HttpClient, private sharedService: SharedService) {}

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
    if (!this.userData) return;
    return this.userData;
  }

  signup(type: string, email: string, password: string, name: string) {
    const user = { type: type, email: email, password: password, name: name };
    return this.http.post<{ success: boolean }>(
      `${this.apiUrl}auth/signup`,
      user
    );
  }

  login(email: string, password: string) {
    const cart = localStorage.getItem('cart');
    const user = { email: email, password: password, cart: cart };
    return this.http
      .post<{
        token: string;
        expiresIn: number;
        success: boolean;
        user: User;
      }>(`${this.apiUrl}auth/login`, user)
      .pipe(
        map((res) => {
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
            this.sharedService.snackBarShow.next(
              `Welcome back ${res.user.name}`
            );
          }
          return res;
        })
      );
  }

  autoLogin() {
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

  resetPassword(email: string) {
    return this.http.post<{ success: boolean }>(
      `${this.apiUrl}auth/resetPassword`,
      {
        email: email,
      }
    );
  }

  newPassword(userId: string, newPassword: string, resetToken: string) {
    const reqParams = {
      userId: userId,
      newPassword: newPassword,
      resetToken: resetToken,
    };
    return this.http.post<{ success: boolean }>(
      `${this.apiUrl}auth/newPassword`,
      reqParams
    );
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStateLisnter.next(false);
    this.userData = null;
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
  }

  setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration);
  }

  private saveAuthData(user: User, token: string, expirationDate: Date) {
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
