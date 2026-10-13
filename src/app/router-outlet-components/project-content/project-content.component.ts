import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProtectedImageComponent } from '../../shared/layout-components/protected-image/protected-image.component';
import { ImagePathResolutionService, ImageDirectories } from '../../shared/services/image-path-resolution.service';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-project-content',
    templateUrl: './project-content.component.html',
    styleUrl: './project-content.component.sass',
    imports: [ProtectedImageComponent],
})
export class ProjectContentComponent {
  public i18n = inject(LanguageService);

  constructor(
    private titleService: Title,
    private imageService: ImagePathResolutionService
  ) {
    effect(() => {
      this.titleService.setTitle(this.i18n.translate('Projects - jpframes.at', 'Projekte - jpframes.at'));
    });
    this.imageService.setCategory(ImageDirectories.Jobs);
  }
}
