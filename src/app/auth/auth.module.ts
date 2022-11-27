import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { NotAuthorizedGuard } from './guards/not-authorized.guard';
import { AuthorizedGuard } from './guards/authorized.guard';
import { SessionStorageService } from './services/session-storage.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    SessionStorageService, 
   {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
   },
   NotAuthorizedGuard,
   AuthorizedGuard
  ]
})
export class AuthModule { }
