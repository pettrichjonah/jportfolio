import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProtectedImageComponent } from "../../shared/layout-components/protected-image/protected-image.component";
import { ImageDirectories, ImagePathResolutionService } from '../../shared/services/image-path-resolution.service';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-photo-content',
    templateUrl: './photo-content.component.html',
    styleUrl: './photo-content.component.sass',
    imports: [ProtectedImageComponent]
})
export class PhotoContentComponent {
  public i18n = inject(LanguageService);

  constructor(
    private titleService: Title,
    private imageService: ImagePathResolutionService
  ) {
    effect(() => {
      this.titleService.setTitle(this.i18n.translate('Spotlight - jpframes.at', 'Galerie - jpframes.at'));
    });
    this.imageService.setCategory(ImageDirectories.EditorsPicks);
  }
}
