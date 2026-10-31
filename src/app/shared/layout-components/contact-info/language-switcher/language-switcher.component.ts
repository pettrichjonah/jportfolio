import { Component, inject } from '@angular/core';
import { LanguageService } from '../../../services/language.service';

@Component({
    selector: 'app-language-switcher',
    templateUrl: './language-switcher.component.html',
    styleUrl: './language-switcher.component.sass'
})
export class LanguageSwitcherComponent {
    public i18n = inject(LanguageService);

    toggleLanguage(): void {
        this.i18n.setLanguage(this.i18n.language() === 'en' ? 'de' : 'en');
    }
}
