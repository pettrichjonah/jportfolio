import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { CatchphraseService } from '../../services/catchphrase.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.sass'
})
export class HeaderComponent implements OnInit, OnDestroy {
    public catchphraseService = inject(CatchphraseService);
    private router = inject(Router);
    private routeSubscription?: Subscription;

    public initialHeaderText = 'Photo | Graphic | Video';
    public phrase = this.catchphraseService.currentPhrase;
    public initialHeaderTextActive = this.catchphraseService.initialHeaderTextActive;
    public showPhrases = this.catchphraseService.showPhrases;

    public ngOnInit(): void {
        this.routeSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
                const navigation = event as NavigationEnd;
                const url = navigation.urlAfterRedirects || navigation.url;
                if (url === '/' || url === '') {
                    this.catchphraseService.init();
                }
            });
    }

    public ngOnDestroy(): void {
        this.catchphraseService.dispose();
        this.routeSubscription?.unsubscribe();
    }
}
