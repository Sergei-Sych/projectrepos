import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private REST_API_SERVER = "http://localhost:3000";

  private isAuthorized$$: BehaviorSubject<User>;
  public isAuthorized$: Observable<User>;

  private isloggedIn!: boolean;

  constructor(private http: HttpClient, private sessionService: SessionStorageService) {
    this.isAuthorized$$ = new BehaviorSubject<User>(JSON.parse(this.sessionService.getToken() as string));
    this.isAuthorized$ = this.isAuthorized$$.asObservable();
  }

  public login(creds : User) {
    return this.http.post(this.REST_API_SERVER +'/login', creds).subscribe(
      res => {
        this.sessionService.setToken('currentUser');
        this.isAuthorized$$.next(creds);
        this.isloggedIn = true;
        return creds;
      }
    );
  }

  public logout() {
    return this.http.delete(this.REST_API_SERVER + '/logout').subscribe(
      res => {
        this.sessionService.deleteToken();
        this.isAuthorized$$.next(new User);
        this.isloggedIn = false;
      }
    );
  }

  public register(creds: User) {
    return this.http.post(this.REST_API_SERVER + '/register', creds).subscribe(
      res => {
        this.sessionService.setToken('currentUser');
        this.isAuthorized$$.next(creds);
        this.isloggedIn = true;
        return creds;
      }
    );
  }

  isUserLoggedIn() {
    return this.isloggedIn;
  }
}
