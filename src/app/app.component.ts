import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactinfoComponent } from './contactinfo/contactinfo.component';
import { AboutmecontentComponent } from './aboutmecontent/aboutmecontent.component';
import { IndexcontentComponent } from './indexcontent/indexcontent.component';
import { PhotocontentComponent } from './photocontent/photocontent.component';
import { VideocontentComponent } from './videocontent/videocontent.component';
import { ProjectcontentComponent } from './projectcontent/projectcontent.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactinfoComponent, AboutmecontentComponent, IndexcontentComponent, PhotocontentComponent, VideocontentComponent, ProjectcontentComponent, FooterComponent, HeaderComponent, NavbarComponent, NotfoundcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'jportfolio';
}
