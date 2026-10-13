import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
    selector: 'app-contact-info',
    templateUrl: './contact-info.component.html',
    styleUrl: './contact-info.component.sass'
})
export class ContactInfoComponent {
    public i18n = inject(LanguageService);
}
