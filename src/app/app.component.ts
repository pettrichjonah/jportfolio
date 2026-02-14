import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactInfoComponent } from './shared/layout-components/contact-info/contact-info.component';
import { FooterComponent } from './shared/layout-components/footer/footer.component';
import { HeaderComponent } from './shared/layout-components/header/header.component';
import { NavigationBarComponent } from './shared/layout-components/navigation-bar/navigation-bar.component';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ContactInfoComponent, FooterComponent, HeaderComponent, NavigationBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
}
