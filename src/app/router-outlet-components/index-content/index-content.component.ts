import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-index-content',
    templateUrl: './index-content.component.html',
    styleUrl: './index-content.component.sass'
})
export class IndexContentComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Home - JP Media");
  }
}
