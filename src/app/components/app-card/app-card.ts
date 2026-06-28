import { Component, Input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.html',
  styleUrl: './app-card.scss',
})
export class AppCard {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() icon = '';
  @Input() extraClass = '';
  @Input() iconExtraClass = '';
  @Input() iconImgExtraClass = '';
  @Input() titleExtraClass = '';

  get cardClass(): string {
    return twMerge(
      'rounded-lg bg-card/80 p-10 text-card-foreground shadow-xl border border-border backdrop-blur sm:p-8',
      this.extraClass,
    );
  }

  get iconClass(): string {
    return twMerge(
      'h-11 w-11 rounded-lg flex justify-center items-center bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--secondary)))]',
      this.iconExtraClass,
    );
  }

  get iconImgClass(): string {
    return twMerge('block size-6', this.iconImgExtraClass);
  }

  get titleClass(): string {
    return twMerge('text-xl font-bold leading-tight text-card-foreground"', this.titleExtraClass);
  }
}
