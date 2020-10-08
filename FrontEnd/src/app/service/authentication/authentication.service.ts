import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  logOut() {
    sessionStorage.removeItem('username');
  }
}
