import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-video-content',
    templateUrl: './video-content.component.html',
    styleUrl: './video-content.component.sass'
})
export class VideoContentComponent {
  public i18n = inject(LanguageService);

  constructor(private titleService:Title) {
    effect(() => {
      this.titleService.setTitle(this.i18n.translate('Videos - jpframes.at', 'Videos - jpframes.at'));
    });
  }
}
