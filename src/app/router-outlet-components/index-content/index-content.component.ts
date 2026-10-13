import { Component, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-index-content',
    templateUrl: './index-content.component.html',
    styleUrl: './index-content.component.sass'
})
export class IndexContentComponent {
  public i18n = inject(LanguageService);

  constructor(private titleService:Title) {
    effect(() => {
      this.titleService.setTitle(this.i18n.translate('frames.at', 'frames.at'));
    });
  }
}
