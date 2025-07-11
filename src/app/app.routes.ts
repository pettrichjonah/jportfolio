import { Routes } from '@angular/router';
import { AboutmecontentComponent } from './aboutmecontent/aboutmecontent.component';
import { IndexcontentComponent } from './indexcontent/indexcontent.component';
import { PhotocontentComponent } from './photocontent/photocontent.component';
import { VideocontentComponent } from './videocontent/videocontent.component';
import { ProjectcontentComponent } from './projectcontent/projectcontent.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';

export const routes: Routes = [
	{ path: '', component: IndexcontentComponent },
	{ path: 'photos', component: PhotocontentComponent },
	{ path: 'videos', component: VideocontentComponent },
	{ path: 'projects', component: ProjectcontentComponent },
	{ path: 'aboutme', component: AboutmecontentComponent },
	{ path: '*', component: NotfoundcomponentComponent }
];
