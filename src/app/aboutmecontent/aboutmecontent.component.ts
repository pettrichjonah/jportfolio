import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutmecontent',
  standalone: true,
  imports: [],
  templateUrl: './aboutmecontent.component.html',
  styleUrl: './aboutmecontent.component.sass'
})
export class AboutmecontentComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("About me - JP Media");
  }
}
