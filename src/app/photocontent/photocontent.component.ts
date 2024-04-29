import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-photocontent',
  standalone: true,
  imports: [],
  templateUrl: './photocontent.component.html',
  styleUrl: './photocontent.component.sass'
})
export class PhotocontentComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Photos - JP Media");
  }
}
