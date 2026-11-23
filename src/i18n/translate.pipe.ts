import { Pipe, PipeTransform } from '@angular/core';

import { TranslationService } from './translation.service';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: false,
})
export class TranslatePipe implements PipeTransform {
  constructor(private readonly translationService: TranslationService) {}

  transform(key: string, ...params: (string | number)[]): string {
    return this.translationService.translate(key, ...params);
  }
}
