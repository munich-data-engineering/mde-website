import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { Language, TranslationMap } from './translations';
import { translationsEn } from './translations.en';
import { translationsDe } from './translations.de';

const STORAGE_KEY = 'mde-language';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private currentLanguage: Language;
  private translations: TranslationMap = translationsEn;

  private readonly languageSubject = new Subject<Language>();
  readonly language$: Observable<Language> = this.languageSubject.asObservable();

  constructor() {
    this.currentLanguage = this.detectLanguage();
    this.translations = this.currentLanguage === 'de' ? translationsDe : translationsEn;
  }

  private detectLanguage(): Language {
    if (typeof localStorage === 'undefined') {
      return 'en';
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'de') {
        return stored;
      }
    } catch {
      // localStorage may be unavailable (e.g. privacy mode); fall back to default.
    }

    return 'en';
  }

  get language(): Language {
    return this.currentLanguage;
  }

  switchToLanguage(language: Language): void {
    if (this.currentLanguage === language) {
      return;
    }

    this.currentLanguage = language;
    this.translations = language === 'de' ? translationsDe : translationsEn;

    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, language);
      } catch {
        // Ignore persistence failures (e.g. storage disabled).
      }
    }

    this.languageSubject.next(language);
  }

  toggleLanguage(): void {
    this.switchToLanguage(this.currentLanguage === 'en' ? 'de' : 'en');
  }

  translate(key: string, ...params: (string | number)[]): string {
    const text = this.translations[key] ?? key;

    if (params.length === 0) {
      return text;
    }

    return text.replace(/\{\{(\d+)\}\}/g, (match, index: string) => {
      const value = params[Number(index)];
      return value === undefined ? match : String(value);
    });
  }
}
