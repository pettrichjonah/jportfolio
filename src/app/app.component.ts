import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ContactinfoComponent, FooterComponent, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'jportfolio';
}
