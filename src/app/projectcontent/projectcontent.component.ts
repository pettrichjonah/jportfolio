import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-projectcontent',
    templateUrl: './projectcontent.component.html',
    styleUrl: './projectcontent.component.sass'
})
export class ProjectcontentComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Projects - JP Media");
  }
}
