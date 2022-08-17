import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  public name = new BehaviorSubject('');
  public isAdmin = new BehaviorSubject(false);
  //  public isHome = new BehaviorSubject(false);

  constructor() {}

  getName() {
    return this.name.asObservable();
  }
  getAdminStatus() {
    return this.isAdmin.asObservable();
  }
  setName(name) {
    this.name.next(name);
  }
  setAdminStatus(stat) {
    this.isAdmin.next(stat);
  }
}
