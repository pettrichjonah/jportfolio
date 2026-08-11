import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CatchphraseService {
    private phrases: string[] = [];
    private phrasesLoaded?: Promise<void>;

    readonly currentPhrase: WritableSignal<string> = signal('');
    readonly initialHeaderTextActive: WritableSignal<boolean> = signal(true);
    readonly showPhrases: WritableSignal<boolean> = signal(false);

    private phraseIndex = 0;
    private started = false;
    private transitionTimer?: number;
    private loopTimer?: number;

    init(): void {
        if (this.started) {
            return;
        }

        this.started = true;
        this.loadPhrases().then(() => {
            window.setTimeout(() => {
                this.transitionToPhrases(this.currentPhrase());
                this.loopTimer = window.setTimeout(() => {
                    this.startPhraseLoop();
                }, this.transitionDelay + 50);
            }, 7000);
        });
    }

    private readonly transitionDelay = 400;

    private loadPhrases(): Promise<void> {
        if (this.phrasesLoaded) {
            return this.phrasesLoaded;
        }

        this.phrasesLoaded = fetch('assets/catchphrases.txt')
            .then(response => response.ok ? response.text() : '')
            .then(text => {
                const loaded = text
                    .split(/\r?\n/)
                    .map(line => line.trim())
                    .filter(line => line.length > 0);

                if (loaded.length > 0) {
                    this.shuffle(loaded);
                    this.phrases = loaded;
                    this.currentPhrase.set(this.phrases[0]);
                }
            })
            .catch(() => undefined);

        return this.phrasesLoaded;
    }

    private shuffle(list: string[]): void {
        for (let i = list.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [list[i], list[j]] = [list[j], list[i]];
        }
    }

    private transitionToPhrases(nextText: string): void {
        if (this.transitionTimer) {
            window.clearTimeout(this.transitionTimer);
        }

        if (!this.showPhrases()) {
            this.showPhrases.set(true);
        }

        this.initialHeaderTextActive.set(false);
        this.transitionTimer = window.setTimeout(() => {
            this.currentPhrase.set(nextText);
            this.initialHeaderTextActive.set(true);
        }, this.transitionDelay);
    }

    private startPhraseLoop(): void {
        this.loopTimer = window.setInterval(() => {
            this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
            const nextPhrase = this.phrases[this.phraseIndex];
            this.transitionToPhrases(nextPhrase);
        }, 3000);
    }

    stop(): void {
        if (this.transitionTimer) {
            window.clearTimeout(this.transitionTimer);
            this.transitionTimer = undefined;
        }
        if (this.loopTimer) {
            window.clearInterval(this.loopTimer);
            this.loopTimer = undefined;
        }

        this.showPhrases.set(false);
        this.initialHeaderTextActive.set(true);
    }

    dispose(): void {
        this.stop();
    }
}
