import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';

export type Language = 'en' | 'de';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  readonly language = signal<Language>(this.getInitialLanguage());

  constructor() {
    this.document.documentElement.lang = this.language();
  }

  setLanguage(language: Language): void {
    this.language.set(language);
    this.document.documentElement.lang = language;

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }

  translate(english: string, german: string, params: Record<string, string | number> = {}): string {
    const value = this.language() === 'de' ? german : english;
    return value.replace(/\{(\w+)\}/g, (_, name: string) => String(params[name] ?? `{${name}}`));
  }

  private getInitialLanguage(): Language {
    if (typeof localStorage !== 'undefined') {
      const storedLanguage = localStorage.getItem('language');
      if (storedLanguage === 'de' || storedLanguage === 'en') {
        return storedLanguage;
      }
    }

    const browserLanguage = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'en';
    return browserLanguage.startsWith('de') ? 'de' : 'en';
  }
}