import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProtectedImageComponent } from '../../shared/layout-components/protected-image/protected-image.component';
import { ImagePathResolutionService, ImageDirectories } from '../../shared/services/image-path-resolution.service';

@Component({
    selector: 'app-project-content',
    templateUrl: './project-content.component.html',
    styleUrl: './project-content.component.sass',
    imports: [ProtectedImageComponent],
})
export class ProjectContentComponent {
  constructor(
    private titleService: Title,
    private imageService: ImagePathResolutionService
  ) {
    this.titleService.setTitle("Projects / JP Media");
    this.imageService.setCategory(ImageDirectories.Jobs);
  }
}
