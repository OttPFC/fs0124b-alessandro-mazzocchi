import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { iLoginData } from '../../interfaces/auth';
import { AuthService } from '../auth.service';
import { iUsers } from '../../interfaces/users';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginData:iLoginData = {
    email: '',
    password: ''
  }
  registerData:Partial<iUsers> = {}

  constructor(
    private authSvc:AuthService,
    private router:Router, private route: ActivatedRoute
    ){}

    showSignup: boolean = false;

  

  ngOnInit() {
    
    this.route.queryParams.subscribe(params => {
      const action = params['action'];
      if (action === 'login') {
        this.showSignup = true;  
      } else {
        this.showSignup = false;
      }
    });
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
