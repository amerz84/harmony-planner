/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated: boolean;

  constructor() {
    this._isAuthenticated = false;
   }

   get isAuthenticated() {
    return this._isAuthenticated;
  }

   login() {
     this._isAuthenticated = true;
   }

   logout() {
     this._isAuthenticated = false;
   }


}
