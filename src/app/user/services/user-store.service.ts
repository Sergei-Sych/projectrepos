import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private _name = new BehaviorSubject<User>(new User);
  private _isAdmin = new BehaviorSubject(false);

  isAdmin$ = this._isAdmin.asObservable();
  name$: Observable<User> = this._name.asObservable();

  constructor(private userService: UserService) { }

  getUser() {
    return this.userService.getUser().subscribe(
      res => this._name.next(res)
    );
  }
}
