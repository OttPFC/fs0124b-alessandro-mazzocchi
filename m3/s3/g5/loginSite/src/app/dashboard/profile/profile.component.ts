import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { iUsers } from '../../interfaces/users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  user:iUsers|undefined;
  
constructor(private authSvc: AuthService){}
  ngOnInit() {
  
    this.authSvc.user$.subscribe(user => {
      this.user = user || undefined;
    })
  }
}
