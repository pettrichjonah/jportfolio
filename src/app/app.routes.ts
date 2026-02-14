import { Routes } from '@angular/router';
import { AboutMeContentComponent } from './router-outlet-components/about-me-content/about-me-content.component';
import { IndexContentComponent } from './router-outlet-components/index-content/index-content.component';
import { PhotoContentComponent } from './router-outlet-components/photo-content/photo-content.component';
import { VideoContentComponent } from './router-outlet-components/video-content/video-content.component';
import { ProjectContentComponent } from './router-outlet-components/project-content/project-content.component';
import { NotFoundComponent } from './router-outlet-components/not-found/not-found.component';

export const routes: Routes = [
	{ path: '', component: IndexContentComponent },
	{ path: 'spotlight', component: PhotoContentComponent },
	{ path: 'videos', component: VideoContentComponent },
	{ path: 'projects', component: ProjectContentComponent },
	{ path: 'aboutme', component: AboutMeContentComponent },
	{ path: '*', component: NotFoundComponent }
];
