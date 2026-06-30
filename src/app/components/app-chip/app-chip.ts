import { Component, Input } from '@angular/core';
import { twMerge } from 'tailwind-merge';

@Component({
  selector: 'app-chip',
  templateUrl: './app-chip.html',
  styleUrl: './app-chip.scss',
})
export class AppChip {
  @Input() extraClass = '';

  get chipClass(): string {
    return twMerge(
      'inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary',
      this.extraClass,
    );
  }
}
