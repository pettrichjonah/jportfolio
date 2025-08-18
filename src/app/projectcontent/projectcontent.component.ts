import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProtectedimageComponent } from '../protectedimage/protectedimage.component';
import { ImageService, ImageDirectories } from '../services/image.service';

@Component({
    selector: 'app-projectcontent',
    templateUrl: './projectcontent.component.html',
    styleUrl: './projectcontent.component.sass',
    imports: [ProtectedimageComponent],
})
export class ProjectcontentComponent {
  constructor(
    private titleService: Title,
    private imageService: ImageService
  ) {
    this.titleService.setTitle("Projects - JP Media");
    this.imageService.setCategory(ImageDirectories.Jobs);
  }
}
