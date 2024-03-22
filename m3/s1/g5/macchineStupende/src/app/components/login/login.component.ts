import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userId:string = 'Capitano'
  password:string = 'Angular'
  autenticato:boolean = true;
  msgErr:string = 'Credenziali errate'
  ngOnInit() {
  }

  gestAuth = () => {
    if (this.userId === this.userId && this.password === this.password) {
      this.autenticato = true
    } else {
      this.autenticato = false  
  }

  }

}
