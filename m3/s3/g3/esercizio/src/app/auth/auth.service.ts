import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt'
import { BehaviorSubject, map } from 'rxjs';
import { iUser } from '../Models/user';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  jwtHelper:JwtHelperService = new JwtHelperService()
  authSubject = new BehaviorSubject<iUser|null>(null)

  $user = this.authSubject.asObservable()
  $isLoggedIn = this.$user.pipe(map(user => !!user))
  constructor(private http:HttpClient, private router:Router) {}


}
