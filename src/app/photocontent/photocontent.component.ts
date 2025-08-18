import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProtectedimageComponent } from "../protectedimage/protectedimage.component";
import { ImageDirectories, ImageService } from '../services/image.service';

@Component({
    selector: 'app-photocontent',
    templateUrl: './photocontent.component.html',
    styleUrl: './photocontent.component.sass',
    imports: [ProtectedimageComponent]
})
export class PhotocontentComponent {

  constructor(
    private titleService: Title,
    private imageService: ImageService
  ) {
    this.titleService.setTitle("Spotlight - JP Media");
    this.imageService.setCategory(ImageDirectories.EditorsPicks);
  }
}
