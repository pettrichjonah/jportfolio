import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.sass'
})
export class FooterComponent {
  public i18n = inject(LanguageService);
  currentYear: number;

  constructor() {
    this.currentYear = new Date().getFullYear();
  }
}
