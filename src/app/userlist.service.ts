import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from './users';

const HeaderOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserlistService {
  _url = 'http://localhost:8000/Users';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this._url, HeaderOption);
  }

  addUser(user: Users) {
    return this.http.post<Users>(this._url, user);
  }
}
