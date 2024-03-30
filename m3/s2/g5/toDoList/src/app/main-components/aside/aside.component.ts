import { Component } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.scss'
})
export class AsideComponent {
  isImageVisible: boolean = false;
  intervalId: any;

  ngOnInit(): void {
    this.startAnimation();
  }

  startAnimation(): void {
    this.intervalId = setInterval(() => {
      this.isImageVisible = !this.isImageVisible;
    }, 1000); 
  }

  ngOnDestroy(){
    clearInterval(this.intervalId); 
  }

}
