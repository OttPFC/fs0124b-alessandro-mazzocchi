import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class ColoriDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.highlight(this.getRandomColor());
  }

  private highlight(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  private getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
