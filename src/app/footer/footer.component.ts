import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.sass'
})
export class FooterComponent {
  currentyear: Number

  constructor() {
    this.currentyear = new Date().getFullYear()
  }
}
