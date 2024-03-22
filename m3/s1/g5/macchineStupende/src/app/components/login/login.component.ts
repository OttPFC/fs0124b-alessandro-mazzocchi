import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userId:string = ''
  password:string = ''
  autenticato:boolean = true;
  msgErr:string = 'Credenziali errate'

  constructor(private route:Router) { }
  ngOnInit() {
  }

  gestAuth = () => {
    if (this.userId === 'CapitanoMike' && this.password === 'Argh') {
      this.route.navigate(['/home'])
      this.autenticato = true
    } else {
      this.autenticato = false 
      alert('Non puoi entrareh')
      this.route.navigate(['/**'])
  }

  }

}
