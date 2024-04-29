import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-indexcontent',
  standalone: true,
  imports: [],
  templateUrl: './indexcontent.component.html',
  styleUrl: './indexcontent.component.sass'
})
export class IndexcontentComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Home - JP Media");
  }
}
