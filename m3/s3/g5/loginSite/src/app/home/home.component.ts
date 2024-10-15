import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { iLoginData } from '../interfaces/auth';
import { iUsers } from '../interfaces/users';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  loginData:iLoginData = {
    email: '',
    password: ''
  }

  registerData:Partial<iUsers> = {}

  showSignup = true

  constructor(private http:HttpClient, private authSvc:AuthService, private router:Router){}

  ngOnInit(){

    this.http.get('http://localhost:3000/users').subscribe()

  }
  signIn(){

    this.authSvc.login(this.loginData)
    .subscribe(data => {
      this.router.navigate(['/dashboard'])
    })
console.log(this.loginData);

  }

signUp(){
  this.authSvc.register(this.registerData)
  .subscribe(data => {

    this.showSignup = true

  })
}
}
