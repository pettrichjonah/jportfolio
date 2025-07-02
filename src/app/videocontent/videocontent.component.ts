import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-videocontent',
    templateUrl: './videocontent.component.html',
    styleUrl: './videocontent.component.sass'
})
export class VideocontentComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Videos - JP Media");
  }
}
