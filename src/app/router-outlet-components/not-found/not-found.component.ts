import { Component, inject } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.sass'
})
export class NotFoundComponent {
  public i18n = inject(LanguageService);
}
