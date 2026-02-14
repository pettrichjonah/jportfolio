import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProtectedImageComponent } from "../../shared/layout-components/protected-image/protected-image.component";
import { ImageDirectories, ImagePathResolutionService } from '../../shared/services/image-path-resolution.service';

@Component({
    selector: 'app-photo-content',
    templateUrl: './photo-content.component.html',
    styleUrl: './photo-content.component.sass',
    imports: [ProtectedImageComponent]
})
export class PhotoContentComponent {

  constructor(
    private titleService: Title,
    private imageService: ImagePathResolutionService
  ) {
    this.titleService.setTitle("Spotlight - JP Media");
    this.imageService.setCategory(ImageDirectories.EditorsPicks);
  }
}
