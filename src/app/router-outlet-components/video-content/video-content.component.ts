import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-video-content',
    templateUrl: './video-content.component.html',
    styleUrl: './video-content.component.sass'
})
export class VideoContentComponent {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Videos - JP Media");
  }
}
