import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from 'src/types/types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:4400/user';

  constructor(private http: HttpClient) {}

  logUser(user: Partial<User>) {
    console.log(user, 'qlq');
    return this.http.patch(this.url + '/login', user);
  }

  registerUser(user: Partial<User>) {
    console.log(user, 'qlq2');
    return this.http.post(this.url + '/register', user);
  }
}
